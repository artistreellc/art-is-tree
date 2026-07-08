import React, { useState, useEffect, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Star, Loader2, Calendar, User, Quote, AlertCircle, CheckCircle } from 'lucide-react';
import { useReviewManagement } from '@/hooks/useReviewManagement';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReviewSelectionDialog = ({ 
  isOpen, 
  onOpenChange, 
  onSelect, 
  replaceMode = false,
  excludedReviewIds = [] 
}) => {
  const [reviews, setReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const { fetchAvailableReviews } = useReviewManagement();

  useEffect(() => {
    if (isOpen) {
      loadReviews();
      setSelectedIds([]);
      setSearchQuery('');
      setCurrentPage(1);
    }
  }, [isOpen]);

  const loadReviews = async () => {
    setLoading(true);
    const data = await fetchAvailableReviews();
    setReviews(data || []);
    setLoading(false);
  };

  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      const searchLower = searchQuery.toLowerCase();
      return (
        review.reviewer_name?.toLowerCase().includes(searchLower) ||
        review.review_text?.toLowerCase().includes(searchLower)
      );
    });
  }, [reviews, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleToggleSelect = (id) => {
    if (replaceMode) return; // In replace mode, we use the button action directly

    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleConfirmSelection = () => {
    onSelect(selectedIds);
  };

  const isSelected = (id) => selectedIds.includes(id);
  const isAlreadyDisplayed = (id) => excludedReviewIds.includes(id);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[85vh] flex flex-col p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b bg-white z-10 shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl text-[#1B4D3E]">
              {replaceMode ? 'Replace Review' : 'Add Reviews'}
            </DialogTitle>
            {!replaceMode && (
              <Badge variant="secondary" className="bg-[#1B4D3E]/10 text-[#1B4D3E]">
                {selectedIds.length} Selected
              </Badge>
            )}
          </div>
          <DialogDescription>
            {replaceMode 
              ? "Choose a review to take the place of the selected one." 
              : "Search and select reviews to display on your testimonials page."}
          </DialogDescription>
          
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search by customer name or review text..." 
              className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-all"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto bg-gray-50/50 p-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#1B4D3E]" />
              <p>Loading available reviews...</p>
            </div>
          ) : filteredReviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <div className="bg-gray-100 p-4 rounded-full mb-3">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <p>No reviews found matching "{searchQuery}"</p>
            </div>
          ) : (
            <div className="space-y-3">
              {paginatedReviews.map((review) => {
                const alreadyDisplayed = isAlreadyDisplayed(review.id);
                const currentlySelected = isSelected(review.id);

                return (
                  <div 
                    key={review.id} 
                    onClick={() => !alreadyDisplayed && !replaceMode && handleToggleSelect(review.id)}
                    className={cn(
                      "bg-white p-4 rounded-lg border shadow-sm transition-all group relative",
                      alreadyDisplayed ? "opacity-60 bg-gray-50 cursor-not-allowed border-gray-100" : "cursor-pointer hover:border-[#1B4D3E] hover:shadow-md",
                      currentlySelected && !replaceMode ? "border-[#1B4D3E] ring-1 ring-[#1B4D3E] bg-[#1B4D3E]/5" : "border-gray-200"
                    )}
                  >
                    <div className="flex gap-4">
                      {/* Selection Checkbox (Only in Add Mode) */}
                      {!replaceMode && (
                        <div className="pt-1">
                          {alreadyDisplayed ? (
                            <CheckCircle className="w-5 h-5 text-gray-300" />
                          ) : (
                            <Checkbox 
                              checked={currentlySelected}
                              onCheckedChange={() => handleToggleSelect(review.id)}
                              className="data-[state=checked]:bg-[#1B4D3E] data-[state=checked]:border-[#1B4D3E]"
                            />
                          )}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 truncate">{review.reviewer_name}</span>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={cn(
                                    "w-3 h-3 fill-current",
                                    i >= review.rating && "text-gray-300 fill-gray-300"
                                  )} 
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-gray-400 whitespace-nowrap flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(review.created_at)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {review.review_text || <span className="italic text-gray-400">No text content</span>}
                        </p>
                        
                        {alreadyDisplayed && (
                          <div className="mt-2 flex items-center gap-1 text-xs text-amber-600 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            Already displayed on website
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col justify-center pl-2 border-l border-gray-100 ml-2">
                        {replaceMode && (
                          <Button 
                            size="sm" 
                            disabled={alreadyDisplayed}
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelect([review.id]);
                            }}
                            className="bg-white text-[#1B4D3E] border border-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white transition-colors"
                          >
                            Select
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer with Pagination and Actions */}
        <DialogFooter className="p-4 border-t bg-white shrink-0 flex items-center justify-between sm:justify-between w-full">
          <div className="flex items-center gap-2 text-sm text-gray-500">
             {filteredReviews.length > 0 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span>Page {currentPage} of {totalPages || 1}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </>
             )}
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
            {!replaceMode && (
              <Button 
                onClick={handleConfirmSelection} 
                disabled={selectedIds.length === 0}
                className="bg-[#1B4D3E] hover:bg-[#153e32]"
              >
                Add Selected ({selectedIds.length})
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewSelectionDialog;
import React, { useEffect, useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { useReviewManagement } from '@/hooks/useReviewManagement';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Trash2, ArrowUpDown, Replace, GripVertical, Plus, Loader2 } from 'lucide-react';
import ReviewSelectionDialog from './ReviewSelectionDialog';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const ReviewItem = ({ item, onRemove, onReplace, dragControls }) => {
  return (
    <Reorder.Item
      value={item}
      id={item.selection_id}
      className="mb-3 relative"
      dragListener={false}
      dragControls={dragControls}
    >
      <Card className="cursor-default hover:shadow-md transition-all border-gray-200 group">
        <CardContent className="p-4 flex items-center gap-4">
          <div 
            className="cursor-grab active:cursor-grabbing p-2 hover:bg-gray-100 rounded text-gray-400 transition-colors"
            onPointerDown={(e) => dragControls.start(e)}
            title="Drag to reorder"
          >
            <GripVertical className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm truncate text-gray-900">{item.reviewer_name}</span>
              <div className="flex text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "w-3 h-3 fill-current", 
                      i >= item.rating && "text-gray-300 fill-gray-300"
                    )} 
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 truncate">{item.review_text || "No text content"}</p>
          </div>

          <div className="flex items-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 text-xs gap-1 border-gray-200 hover:border-[#1B4D3E] hover:text-[#1B4D3E]"
              onClick={() => onReplace(item)}
            >
              <Replace className="w-3 h-3" /> <span className="hidden sm:inline">Replace</span>
            </Button>
            <Button 
              variant="destructive" 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={() => onRemove(item.selection_id)}
              title="Remove from display"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Reorder.Item>
  );
};

const ReviewItemWrapper = (props) => {
  const controls = useDragControls();
  return <ReviewItem {...props} dragControls={controls} />;
};

const ReviewManagementPanel = ({ className }) => {
  const { 
    fetchSelectedReviews, 
    removeSelectedReview, 
    replaceSelectedReview, 
    addSelectedReviews,
    updateReviewOrder,
    loading: hookLoading 
  } = useReviewManagement();

  const [selectedReviews, setSelectedReviews] = useState([]);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [replaceTarget, setReplaceTarget] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const loadData = async () => {
    const data = await fetchSelectedReviews();
    setSelectedReviews(data || []);
    setInitialLoad(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleReorder = (newOrder) => {
    // Optimistic update
    setSelectedReviews(newOrder);
    // Update backend
    const updates = newOrder.map((item, index) => ({
      selection_id: item.selection_id,
      display_order: index
    }));
    updateReviewOrder(updates);
  };

  const handleRemove = async (selectionId) => {
    if (confirm("Remove this review from your website display?")) {
      const success = await removeSelectedReview(selectionId);
      if (success) {
        setSelectedReviews(prev => prev.filter(item => item.selection_id !== selectionId));
      }
    }
  };

  const handleReplaceStart = (item) => {
    setReplaceTarget(item);
    setIsSelectionOpen(true);
  };

  const handleAddStart = () => {
    setReplaceTarget(null);
    setIsSelectionOpen(true);
  };

  const handleSelectionConfirmed = async (reviewIds) => {
    if (replaceTarget) {
      // Replace mode (reviewIds will be an array of 1)
      if (reviewIds.length > 0) {
        await replaceSelectedReview(replaceTarget.selection_id, reviewIds[0]);
      }
    } else {
      // Add mode (bulk)
      await addSelectedReviews(reviewIds);
    }
    setIsSelectionOpen(false);
    setReplaceTarget(null);
    loadData();
  };

  return (
    <div className={cn("space-y-6 h-full flex flex-col", className)}>
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-[#1B4D3E]">Manage Reviews</h2>
          <p className="text-sm text-gray-500 mt-1">
            Curate the testimonials displayed on your website.
          </p>
        </div>
        <Button onClick={handleAddStart} className="bg-[#1B4D3E] hover:bg-[#153e32] gap-2 shadow-sm">
          <Plus className="w-4 h-4" /> Add Reviews
        </Button>
      </div>

      <div className="bg-gray-50/50 p-6 rounded-xl border border-dashed border-gray-300 flex-1 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-700">Displayed Reviews ({selectedReviews.length})</h3>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3" /> Drag to reorder
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          {initialLoad ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#1B4D3E]" />
              <p>Loading your selection...</p>
            </div>
          ) : selectedReviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400 bg-white rounded-lg border border-gray-100">
              <Star className="w-12 h-12 text-gray-200 mb-3" />
              <p className="font-medium">No reviews selected yet.</p>
              <p className="text-sm">Click "Add Reviews" to choose from your Google reviews.</p>
            </div>
          ) : (
            <Reorder.Group axis="y" values={selectedReviews} onReorder={handleReorder}>
              {selectedReviews.map((item) => (
                <ReviewItemWrapper
                  key={item.selection_id}
                  item={item}
                  onRemove={handleRemove}
                  onReplace={handleReplaceStart}
                />
              ))}
            </Reorder.Group>
          )}
        </div>
      </div>

      <ReviewSelectionDialog
        isOpen={isSelectionOpen}
        onOpenChange={setIsSelectionOpen}
        onSelect={handleSelectionConfirmed}
        replaceMode={!!replaceTarget}
        excludedReviewIds={selectedReviews.map(r => r.id)}
      />
    </div>
  );
};

export default ReviewManagementPanel;
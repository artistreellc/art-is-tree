
import { useState, useCallback } from 'react';
// import { supabase } from '@/lib/customSupabaseClient'; // DISABLED: Supabase queries are disabled
import { useToast } from '@/components/ui/use-toast';

export const useReviewManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  // DISABLED: Fetch all available reviews from the 'reviews' table
  const fetchAvailableReviews = useCallback(async () => {
    try {
      setLoading(true);
      // Mock empty return
      console.log('[useReviewManagement] fetchAvailableReviews disabled');
      return [];
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // DISABLED: Fetch selected reviews joined with their review data
  const fetchSelectedReviews = useCallback(async () => {
    try {
      setLoading(true);
      // Mock empty return
      console.log('[useReviewManagement] fetchSelectedReviews disabled');
      return [];
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a single review to the selected list
  const addSelectedReview = useCallback(async (reviewId) => {
    return addSelectedReviews([reviewId]);
  }, []);

  // bulk add reviews
  const addSelectedReviews = useCallback(async (reviewIds) => {
    if (!reviewIds || reviewIds.length === 0) return true;
    try {
      setLoading(true);
      console.log('[useReviewManagement] addSelectedReviews disabled');
      toast({ title: "Mock Success", description: `${reviewIds.length} review(s) pseudo-added.` });
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Remove a review from the selected list
  const removeSelectedReview = useCallback(async (selectionId) => {
    try {
      setLoading(true);
      console.log('[useReviewManagement] removeSelectedReview disabled');
      toast({ title: "Mock Success", description: "Review pseudo-removed." });
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Replace a selected review with another one
  const replaceSelectedReview = useCallback(async (selectionId, newReviewId) => {
    try {
      setLoading(true);
      console.log('[useReviewManagement] replaceSelectedReview disabled');
      toast({ title: "Mock Success", description: "Review pseudo-replaced." });
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Update the display order of selected reviews
  const updateReviewOrder = useCallback(async (orderedItems) => {
    try {
      console.log('[useReviewManagement] updateReviewOrder disabled');
      return true;
    } catch (err) {
      return false;
    }
  }, []);

  return {
    loading,
    error,
    fetchAvailableReviews,
    fetchSelectedReviews,
    addSelectedReview,
    addSelectedReviews,
    removeSelectedReview,
    replaceSelectedReview,
    updateReviewOrder
  };
};

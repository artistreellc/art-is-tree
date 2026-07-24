
import React, { useState, useCallback, useMemo, useReducer, useEffect } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { FinancingBanner } from '@/components/Financing';
import { useDebounce } from '@/hooks/useDebounce';
// import { supabase } from '@/lib/customSupabaseClient';

// Contact form delivery via FormSubmit (https://formsubmit.co). No API key or
// server-side environment variable is required — submissions are emailed
// straight to the address below. The FIRST submission triggers a one-time
// activation email to that inbox; clicking "Activate Form" once enables all
// future deliveries automatically.
const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/artistreeofvirginia@gmail.com';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'UPDATE_ERRORS':
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      };
    case 'RESET_FORM':
      return {
        name: '',
        phone: '',
        email: '',
        address: '',
        serviceNeeded: '',
        urgency: '',
        message: '',
        errors: {}
      };
    default:
      return state;
  }
};

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  serviceNeeded: '',
  urgency: '',
  message: '',
  errors: {}
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const debouncedName = useDebounce(formState.name, 300);
  const debouncedEmail = useDebounce(formState.email, 300);
  const debouncedPhone = useDebounce(formState.phone, 300);
  const debouncedAddress = useDebounce(formState.address, 300);
  const debouncedMessage = useDebounce(formState.message, 300);

  const validateField = useCallback((field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        const phoneDigits = value.replace(/\D/g, '');
        if (!value.trim()) return 'Phone number is required';
        if (phoneDigits.length < 10) return 'Phone number must contain at least 10 digits';
        return '';
        
      case 'address':
        if (!value.trim()) return 'Property Address is required';
        return '';
        
      case 'serviceNeeded':
        if (!value.trim()) return 'Please select a service';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      
      default:
        return '';
    }
  }, []);

  // Consolidated useEffect for all field validations to reduce redundant renders
  useEffect(() => {
    const newErrors = {};
    
    // Validate against the DEBOUNCED values only (and guard on them too) so an
    // error never renders for a value the user has already typed past.
    if (debouncedName !== '') newErrors.name = validateField('name', debouncedName);
    if (debouncedPhone !== '') newErrors.phone = validateField('phone', debouncedPhone);
    if (debouncedEmail !== '') newErrors.email = validateField('email', debouncedEmail);
    if (debouncedAddress !== '') newErrors.address = validateField('address', debouncedAddress);
    if (formState.serviceNeeded !== '') newErrors.serviceNeeded = validateField('serviceNeeded', formState.serviceNeeded);
    if (debouncedMessage !== '') newErrors.message = validateField('message', debouncedMessage);

    dispatch({ type: 'UPDATE_ERRORS', errors: newErrors });
  }, [debouncedName, debouncedEmail, debouncedPhone, debouncedAddress, debouncedMessage, validateField, formState.serviceNeeded]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
    
    if (isSuccess) {
      setIsSuccess(false);
    }
  }, [isSuccess]);

  const handleSelectChange = useCallback((field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
    if (isSuccess) {
      setIsSuccess(false);
    }
  }, [isSuccess]);

  const formIsValid = useMemo(() => {
    return formState.name.trim().length >= 2 &&
           formState.phone.replace(/\D/g, '').length >= 10 &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim()) &&
           formState.address.trim().length > 0 &&
           formState.serviceNeeded.trim().length > 0 &&
           formState.message.trim().length >= 10 &&
           Object.values(formState.errors).every(error => !error);
  }, [formState]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const errors = {
      name: validateField('name', formState.name),
      phone: validateField('phone', formState.phone),
      email: validateField('email', formState.email),
      address: validateField('address', formState.address),
      serviceNeeded: validateField('serviceNeeded', formState.serviceNeeded),
      message: validateField('message', formState.message)
    };

    const hasErrors = Object.values(errors).some(error => error);

    if (hasErrors) {
      dispatch({ type: 'UPDATE_ERRORS', errors });
      toast({
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <span>Validation Error</span>
          </div>
        ),
        description: 'Please fill in all required fields correctly.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const payload = {
        name: formState.name.trim(),
        phone: formState.phone.trim(),
        email: formState.email.trim(),
        address: formState.address.trim(),
        serviceNeeded: formState.serviceNeeded,
        urgency: formState.urgency,
        message: formState.message.trim(),
        _subject: `New estimate request from ${formState.name.trim()}${formState.serviceNeeded ? ` — ${formState.serviceNeeded}` : ''}`,
        _template: 'table',
        _captcha: 'false',
      };

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      // FormSubmit returns { success: "true" } (string) on success.
      const ok = response.ok && (data.success === true || data.success === 'true');
      if (!ok) {
        throw new Error(data.message || data.error || 'Failed to send message. Please try again.');
      }

      // Signal a successful "Request quote" submission to GTM via the dataLayer.
      // GTM owns the actual Google Ads conversion tag (AW-10806457837/
      // i_SkCOqBhMQbEO3r9aAo) and fires it from a Custom Event trigger on
      // `contact_form_submit`. This is the single source of truth — no direct
      // gtag() conversion call, so there is no double-count.
      if (typeof window !== 'undefined' && window.gtag_report_contact_form) {
        window.gtag_report_contact_form();
      }

      setIsSuccess(true);
      
      toast({
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Your request has been submitted successfully!</span>
          </div>
        ),
        description: "Thank you for contacting Art-is-Tree LLC. We'll get back to you soon.",
        className: "bg-green-50 border-green-200"
      });
      
      dispatch({ type: 'RESET_FORM' });
      
    } catch (err) {
      setIsSuccess(false);
      
      toast({
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span>Failed to send message</span>
          </div>
        ),
        description: err.message || 'There was an error sending your message. Please try again.',
        variant: 'destructive'
      });
      
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, validateField, toast]);

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-6" noValidate>
      <div className={`transition-all duration-300 overflow-hidden ${isSuccess ? 'h-[88px] opacity-100 mb-4' : 'h-0 opacity-0'}`}>
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 h-full flex items-center">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 mb-1">Message Sent Successfully!</p>
              <p className="text-sm text-green-700">
                Thank you for contacting us. We'll get back to you within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
            Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative min-h-[44px]">
            <Input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              placeholder="John Smith"
              disabled={isSubmitting}
              className={`w-full absolute inset-0 ${formState.errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
              aria-required="true"
              aria-invalid={!!formState.errors.name}
              aria-describedby={formState.errors.name ? 'name-error' : undefined}
            />
          </div>
          <div className="h-6 mt-1">
            {formState.errors.name && (
              <p id="name-error" className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {formState.errors.name}
              </p>
            )}
          </div>
        </div>

        <div className="form-field">
          <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <div className="relative min-h-[44px]">
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              placeholder="(757) 123-4567"
              disabled={isSubmitting}
              className={`w-full absolute inset-0 ${formState.errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
              aria-required="true"
              aria-invalid={!!formState.errors.phone}
              aria-describedby={formState.errors.phone ? 'phone-error' : undefined}
            />
          </div>
          <div className="h-6 mt-1">
            {formState.errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {formState.errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="form-field">
        <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <div className="relative min-h-[44px]">
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={isSubmitting}
            className={`w-full absolute inset-0 ${formState.errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            aria-required="true"
            aria-invalid={!!formState.errors.email}
            aria-describedby={formState.errors.email ? 'email-error' : undefined}
          />
        </div>
        <div className="h-6 mt-1">
          {formState.errors.email && (
            <p id="email-error" className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {formState.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="form-field">
        <Label htmlFor="address" className="text-gray-700 font-medium mb-2 block">
          Property Address <span className="text-red-500">*</span>
        </Label>
        <div className="relative min-h-[44px]">
          <Input
            id="address"
            name="address"
            type="text"
            value={formState.address}
            onChange={handleChange}
            placeholder="123 Main St, Virginia Beach, VA 23456"
            disabled={isSubmitting}
            className={`w-full absolute inset-0 ${formState.errors.address ? 'border-red-500 focus:ring-red-500' : ''}`}
            aria-required="true"
            aria-invalid={!!formState.errors.address}
            aria-describedby={formState.errors.address ? 'address-error' : undefined}
          />
        </div>
        <div className="h-6 mt-1">
          {formState.errors.address && (
            <p id="address-error" className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {formState.errors.address}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <Label htmlFor="serviceNeeded" className="text-gray-700 font-medium mb-2 block">
            Service Needed <span className="text-red-500">*</span>
          </Label>
          <div className="relative min-h-[44px]">
            <Select 
              value={formState.serviceNeeded} 
              onValueChange={(value) => handleSelectChange('serviceNeeded', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger
                id="serviceNeeded"
                className={`w-full absolute inset-0 ${formState.errors.serviceNeeded ? 'border-red-500 focus:ring-red-500' : ''}`}
                aria-invalid={!!formState.errors.serviceNeeded}
                aria-required="true"
                aria-describedby={formState.errors.serviceNeeded ? 'serviceNeeded-error' : undefined}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tree Removal">Tree Removal</SelectItem>
                <SelectItem value="Tree Trimming & Pruning">Tree Trimming & Pruning</SelectItem>
                <SelectItem value="Stump Grinding">Stump Grinding</SelectItem>
                <SelectItem value="Land Clearing">Land Clearing</SelectItem>
                <SelectItem value="Emergency / Storm Damage">Emergency / Storm Damage</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-6 mt-1">
            {formState.errors.serviceNeeded && (
              <p id="serviceNeeded-error" className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {formState.errors.serviceNeeded}
              </p>
            )}
          </div>
        </div>

        <div className="form-field">
          <Label htmlFor="urgency" className="text-gray-700 font-medium mb-2 block">
            How soon do you need service? <span className="text-gray-600 text-sm font-normal">(Optional)</span>
          </Label>
          <div className="relative min-h-[44px]">
            <Select 
              value={formState.urgency} 
              onValueChange={(value) => handleSelectChange('urgency', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger id="urgency" className="w-full absolute inset-0">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Emergency (ASAP)">Emergency (ASAP)</SelectItem>
                <SelectItem value="Within a week">Within a week</SelectItem>
                <SelectItem value="Within a month">Within a month</SelectItem>
                <SelectItem value="Just getting a quote">Just getting a quote</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-6 mt-1"></div>
        </div>
      </div>

      <div className="form-field">
        <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
          Message <span className="text-red-500">*</span>
        </Label>
        <div className="relative min-h-[150px]">
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Tell us about your tree care needs..."
            disabled={isSubmitting}
            rows={6}
            className={`w-full h-full resize-none absolute inset-0 ${formState.errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
            aria-required="true"
            aria-invalid={!!formState.errors.message}
            aria-describedby={formState.errors.message ? 'message-error' : undefined}
          />
        </div>
        <div className="h-6 mt-1">
          {formState.errors.message && (
            <p id="message-error" className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {formState.errors.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formIsValid}
        size="lg"
        className="w-full bg-gradient-to-r from-[#1B4D3E] to-[#2A7A5E] hover:from-[#153d32] hover:to-[#236650] text-white font-semibold py-3 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center min-h-[40px]">
        We typically respond within 24 hours during business days.
        <br />
        For immediate assistance, call{' '}
        <a href="tel:7573195131" onClick={() => { if (typeof window !== 'undefined' && window.gtag_report_phone_click) window.gtag_report_phone_click(); }} className="text-[#2A7A5E] hover:text-[#1B4D3E] font-medium touch-target inline-flex items-center">
          (757) 319-5131
        </a>
      </p>

      <div className="pt-2">
        <FinancingBanner />
      </div>
    </form>
  );
};

export default React.memo(ContactForm);

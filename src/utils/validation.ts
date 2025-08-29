export const validateName = (name: string): string | undefined => {
  if (!name.trim()) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters';
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) return 'Email is required';
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (!phone) return undefined;
  const phoneRegex = /^(\+[0-9]{1,3})?[-\s]?([0-9]{1,4}[-\s]?){1,3}[0-9]{1,4}$/;
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
  return undefined;
};

export const validateService = (service: string): string | undefined => {
  if (!service) return 'Please select a service';
  return undefined;
};

export const validateMessage = (message: string): string | undefined => {
  if (!message.trim()) return 'Message is required';
  if (message.trim().length < 10) return 'Message must be at least 10 characters';
  return undefined;
};

export const validatePrivacy = (privacy: boolean): string | undefined => {
  if (!privacy) return 'You must agree to the privacy policy';
  return undefined;
};

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  privacy: boolean;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  privacy?: string;
}

export interface TouchedFields {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  service?: boolean;
  message?: boolean;
  privacy?: boolean;
}

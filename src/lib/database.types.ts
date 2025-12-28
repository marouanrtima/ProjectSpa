export interface Database {
  public: {
    Tables: {
      treatments: {
        Row: {
          id: string;
          name: string;
          description: string;
          duration: string;
          category: string;
          image_url: string;
          is_featured: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['treatments']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['treatments']['Insert']>;
      };
      packages: {
        Row: {
          id: string;
          name: string;
          description: string;
          included_treatments: string;
          duration: string;
          image_url: string;
          is_popular: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['packages']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['packages']['Insert']>;
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          message: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['contact_submissions']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['contact_submissions']['Insert']>;
      };
      services: {
        Row: {
          id: string;
          name: string;
          description: string;
          image_url: string;
          slug: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
      };
      service_items: {
        Row: {
          id: string;
          service_id: string;
          name: string;
          description: string | null;
          duration: string | null;
          price: number | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['service_items']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['service_items']['Insert']>;
      };
    };
  };
}

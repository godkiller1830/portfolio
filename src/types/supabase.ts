export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string;
          bio: string;
          photo_url: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          bio: string;
          photo_url: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          bio?: string;
          photo_url?: string;
          created_at?: string;
        };
      };
      education: {
        Row: {
          id: string;
          degree: string;
          institution: string;
          location: string;
          start_date: string;
          end_date: string | null;
          score: string | null;
          type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          degree: string;
          institution: string;
          location: string;
          start_date: string;
          end_date?: string | null;
          score?: string | null;
          type: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          degree?: string;
          institution?: string;
          location?: string;
          start_date?: string;
          end_date?: string | null;
          score?: string | null;
          type?: string;
          created_at?: string;
        };
      };
      standardized_tests: {
        Row: {
          id: string;
          name: string;
          score: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          score: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          score?: string;
          created_at?: string;
        };
      };
      skills: {
        Row: {
          id: string;
          name: string;
          level: number;
          category: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          level: number;
          category: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          level?: number;
          category?: string;
          created_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          image_url: string;
          live_url: string;
          source_url: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image_url: string;
          live_url: string;
          source_url: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image_url?: string;
          live_url?: string;
          source_url?: string;
          created_at?: string;
        };
      };
      experience: {
        Row: {
          id: string;
          company: string;
          role: string;
          start_date: string;
          end_date: string | null;
          description: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          company: string;
          role: string;
          start_date: string;
          end_date?: string | null;
          description: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          company?: string;
          role?: string;
          start_date?: string;
          end_date?: string | null;
          description?: string;
          created_at?: string;
        };
      };
    };
  };
}
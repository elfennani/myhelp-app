export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      chats: {
        Row: {
          archived: boolean | null
          created_at: string | null
          id: number
          name: string | null
          user_id: string | null
        }
        Insert: {
          archived?: boolean | null
          created_at?: string | null
          id?: number
          name?: string | null
          user_id?: string | null
        }
        Update: {
          archived?: boolean | null
          created_at?: string | null
          id?: number
          name?: string | null
          user_id?: string | null
        }
      }
      messages: {
        Row: {
          chat_id: number | null
          content: string
          created_at: string | null
          id: number
          parent_id: number | null
          role: string
        }
        Insert: {
          chat_id?: number | null
          content: string
          created_at?: string | null
          id?: number
          parent_id?: number | null
          role: string
        }
        Update: {
          chat_id?: number | null
          content?: string
          created_at?: string | null
          id?: number
          parent_id?: number | null
          role?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

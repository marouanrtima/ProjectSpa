/*
  # Create Spa Website Tables

  1. New Tables
    - `treatments`
      - `id` (uuid, primary key)
      - `name` (text) - Treatment name
      - `description` (text) - Short description
      - `duration` (text) - Duration (e.g., "60 min")
      - `category` (text) - Category (e.g., "massage", "facial")
      - `image_url` (text) - Image URL
      - `is_featured` (boolean) - Whether it appears on home page
      - `created_at` (timestamptz)
    
    - `packages`
      - `id` (uuid, primary key)
      - `name` (text) - Package name
      - `description` (text) - Package description
      - `included_treatments` (text) - List of included treatments
      - `duration` (text) - Total duration
      - `image_url` (text) - Image URL
      - `is_popular` (boolean) - Whether it appears on home page
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `phone` (text) - Sender phone
      - `message` (text) - Message content
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for treatments and packages
    - Authenticated insert access for contact submissions
*/

CREATE TABLE IF NOT EXISTS treatments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  duration text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  included_treatments text NOT NULL,
  duration text NOT NULL,
  image_url text NOT NULL,
  is_popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view treatments"
  ON treatments
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view packages"
  ON packages
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
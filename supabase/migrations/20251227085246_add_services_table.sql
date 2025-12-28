/*
  # Add Services Table

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text) - Service category name
      - `description` (text) - Short description
      - `image_url` (text) - Category image
      - `slug` (text) - URL slug
      - `created_at` (timestamptz)
    
    - `service_items`
      - `id` (uuid, primary key)
      - `service_id` (uuid, foreign key)
      - `name` (text) - Service name
      - `description` (text)
      - `duration` (text)
      - `price` (decimal)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public read access
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS service_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid NOT NULL REFERENCES services(id),
  name text NOT NULL,
  description text,
  duration text,
  price decimal(10, 2),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view services"
  ON services
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view service items"
  ON service_items
  FOR SELECT
  TO anon, authenticated
  USING (true);
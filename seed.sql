USE insurance_claim_system;

-- Insert Test Users (Password is 'password123')
INSERT INTO users (name, email, password, role) VALUES
('Alice Smith', 'alice@example.com', '$2a$10$wT8vG/8T/A9hW3F8X9wO.O4Q2Z/1V0O2Z/1V0O2Z/1V0O2Z/1V0', 'claimant'),
('Bob Insurer', 'bob@example.com', '$2a$10$wT8vG/8T/A9hW3F8X9wO.O4Q2Z/1V0O2Z/1V0O2Z/1V0O2Z/1V0', 'insurer'),
('Charlie Adjuster', 'charlie@example.com', '$2a$10$wT8vG/8T/A9hW3F8X9wO.O4Q2Z/1V0O2Z/1V0O2Z/1V0O2Z/1V0', 'adjuster');

-- Insert Sample Claim
INSERT INTO claims (claim_number, policy_number, claimant_id, claim_type, amount, status, description) VALUES
('CLM-1001', 'POL-998877', 1, 'Auto Insurance', 2500.00, 'submitted', 'Minor fender bender on main street');
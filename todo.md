# JLB Outdoor Solutions - Project TODO

## Core Setup
- [x] Initialize project scaffold (web-db-user)
- [x] Upload reference images to CDN
- [x] Design system (colors, fonts, global CSS)
- [x] Database schema (contacts, portfolio, testimonials)
- [x] Run DB migration
- [x] Seed testimonials and portfolio data

## Pages & Navigation
- [x] Top navigation bar (logo, links, CTA button)
- [x] Footer with contact info and links
- [x] Homepage hero section with tagline
- [x] Homepage services overview (6 cards)
- [x] Homepage portfolio preview (3 featured)
- [x] Homepage testimonials strip
- [x] Homepage CTA section

## Services Page
- [x] Soil Health service card
- [x] Seasonal Cleanup service card
- [x] Yard Installation & Grading service card
- [x] Lot Clearing & Skid Steer service card
- [x] Concrete Flatwork service card
- [x] Pavers service card

## Portfolio Page
- [x] Gallery grid with category filter
- [x] Lightbox / modal image viewer
- [x] Placeholder images from CDN

## About Page
- [x] Company story section
- [x] "Excellence Edge to Edge" tagline featured prominently
- [x] Team/values section

## Testimonials Section
- [x] Testimonials display on homepage
- [x] Dedicated testimonials section/page

## Cost Estimator Tool
- [x] Service selector
- [x] Square footage / area input
- [x] Dynamic price range calculation
- [x] Disclaimer banner (ballpark estimate, prices may vary)

## Contact Form
- [x] Name, email, phone, service, message fields
- [x] tRPC mutation to save to DB
- [x] Success/error feedback
- [x] Owner notification on submission

## Backend
- [x] contacts table in schema
- [x] portfolio_items table in schema
- [x] testimonials table in schema
- [x] DB migration applied
- [x] submitContact tRPC procedure
- [x] getPortfolio tRPC procedure
- [x] getTestimonials tRPC procedure

## Tests
- [x] Contact form submission test (3 cases)
- [x] Auth logout test (existing)

## AI Yard Redesign Tool (NEW)
- [x] design_requests table in schema
- [x] AI image generation for yard redesign
- [x] Design customization form (work types, features, style)
- [x] Cost estimate calculation with 10% discount
- [x] Download redesigned image
- [x] Share design functionality
- [x] Yard redesign page with image upload
- [x] Backend tRPC procedures for design requests

## Admin Dashboard (NEW)
- [x] Admin-only route protection
- [x] Design requests list view
- [x] View design details and estimates
- [x] Export design requests as CSV
- [x] Status tracking (pending, generated, quoted, contacted, completed)

## Estimator Price Updates (NEW)
- [x] Reduce all service prices by 10%
- [x] Update Estimator page with new pricing

## Tests (NEW)
- [x] Design request submission test (3 cases)


## Updates (Current)
- [x] Update AI redesign to use uploaded image as base for generation
- [x] Store original image URL in design_requests table
- [x] Configure all emails to jlboutdoorsolutions@gmail.com
- [x] Update contact form to send to company email
- [x] Update design request notifications to send to company email
- [x] All tests passing (7 tests)


## Removals (Current)
- [x] Remove AI Redesign page
- [x] Remove redesign route from App.tsx
- [x] Remove redesign link from Navigation
- [x] Remove design request procedures from routers.ts
- [x] Remove admin dashboard page
- [x] Remove admin route from App.tsx
- [x] Remove design_requests table from schema
- [x] Remove design request tests

## Estimator Rework (Current)
- [x] Update seasonal_cleanup: base $150, min 5000 sqft
- [x] Apply 20% price reduction to all other services
- [x] Update Estimator page UI with new pricing
- [x] All tests passing (4 tests)


## Current Updates (Regenerative Integration)
- [x] Fix seasonal cleanup estimator to show price range (added 0.015 per sqft)
- [x] Update homepage services with regenerative/sustainable messaging
- [x] Update Services page with regenerative/sustainable messaging
- [x] Update About page with regenerative practices and values
- [x] Add regenerative commitment section to About page
- [x] All tests passing (4 tests)


## New Updates (Current)
- [x] Add snow removal service to estimator tool
- [x] Add snow removal to Services page (via estimator)
- [x] Add snow removal to homepage services overview (via estimator)
- [x] Integrate estimator tool prominently on homepage (hero or featured section)
- [x] Add St. Louis, MO location to Navigation/Footer
- [x] Add service area information to About page
- [x] Update all location references throughout site
- [x] Test all changes (4 tests passing)


## Admin Features (Current)
- [x] Create admin login page with password protection (password: JLB2024Excellence)
- [x] Build image upload system for portfolio items
- [x] Build image upload system for testimonials
- [x] Add secret admin button to footer (hidden gear icon)
- [x] Wire admin routes and authentication
- [x] Test admin functionality (4 tests passing)

# ZenB - Multi Vendor Ecommerce + Dropshipping Marketplace

ZenB is a scalable monorepo blueprint for a production-grade ecommerce marketplace similar to Amazon/Flipkart, tailored for **zenb.in**. It includes customer storefront, backend APIs, admin panel, seller dashboard, and dropshipping workflows.

## Monorepo structure

- `frontend/` - Next.js + React storefront (Tailwind + Redux Toolkit)
- `backend/` - Node.js + Express API with MongoDB + JWT + Google OAuth + Razorpay flows
- `admin-dashboard/` - Admin control panel
- `seller-dashboard/` - Seller operations panel
- `database/` - schema overview and indexing reference
- `api/` - OpenAPI starter spec
- `docs/` - install/deployment and operational guidance

## Core features implemented

### Authentication
- Email signup/login (JWT)
- Google OAuth strategy scaffold
- Phone OTP endpoint scaffold (Firebase client compatible)
- Password reset/email verification endpoint scaffolds
- Profile and address-ready user model

### Customer commerce features
- Premium homepage sections (hero, categories, trending, flash deals)
- Product listing API with search/filter/sort query support
- Product detail page template with gallery/specs/seller info placeholders
- Cart and wishlist state using Redux Toolkit
- Order creation and order history APIs
- Razorpay order creation and signature verification flow

### Multi-vendor and dropshipping
- Seller model and admin approval endpoint
- Seller role-protected product creation API
- Supplier model and dropship endpoints (import, sync, forward)
- Commission and payout-ready fields in seller model

### Admin capabilities
- Admin dashboard metrics endpoint
- Seller approval workflow endpoint
- Data model foundation for reports/payments/refunds

### Security and performance baseline
- Helmet, CORS, rate limiting, centralized error handler
- Input validation using Joi
- Next.js image optimization + code-splitting ready architecture
- Dockerfiles for all apps + docker-compose orchestration

## Quick start

```bash
npm install
docker compose up --build
```

Services:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Admin: http://localhost:3001
- Seller: http://localhost:3002

## Important production extensions (next phase)

1. Implement full OTP verify flow with Firebase Admin token checks.
2. Add refresh token lifecycle, session revocation, and CSRF double-submit cookies.
3. Build complete checkout UI, order tracking timeline, return/refund workflows.
4. Add supplier connectors (CSV/API) + background jobs (BullMQ/Redis).
5. Implement recommendation engine (events pipeline + model service).
6. Add full SEO: dynamic sitemap, JSON-LD, canonical links, robots policy.
7. Add test coverage (unit/integration/e2e), observability, and CI security gates.

See `docs/installation-and-deployment.md` for production deployment guidance.

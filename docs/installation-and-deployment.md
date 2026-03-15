# ZenB Installation & Deployment Guide

## Local development
1. Install Node.js 20+ and Docker.
2. Run `npm install` at repository root to install workspace tooling.
3. Run `npm install --workspace backend` and same for each dashboard/frontend if needed.
4. Copy `backend/.env.example` to `backend/.env` and set credentials.
5. Start all services with Docker: `docker compose up --build`.
6. Or run app processes locally via `npm run dev`.

## Production deployment
- Use a reverse proxy (Nginx/Traefik) for TLS termination on `zenb.in` and subdomains.
- Deploy services as separate containers:
  - `frontend` => `zenb.in`
  - `backend` => `api.zenb.in`
  - `admin-dashboard` => `admin.zenb.in`
  - `seller-dashboard` => `seller.zenb.in`
- Use managed MongoDB with backups.
- Store secrets in cloud secret manager.
- Enable CDN and edge caching for static assets.
- Add CI/CD pipeline for tests, build, security scans, and rolling deploys.

## Environment hardening checklist
- Rotate JWT and payment keys.
- Enforce HTTPS only cookies and HSTS.
- Configure WAF and DDoS protection.
- Enable audit logging and SIEM forwarding.

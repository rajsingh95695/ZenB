# ZenB MongoDB Collections

- users
- sellers
- suppliers
- products
- orders
- paymentlogs

Indexes:
- `users.email` unique sparse
- `users.phone` unique sparse
- `products.slug` unique
- `products.title` text-like search index
- `products.category` index
- `sellers.storeSlug` unique

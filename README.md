# Bryt Designs Tech Challenge

### Shopify Product Review App

### Hello fellow candidate! 👋

###### Today's challenge is to build a product review app in Shopify. The project uses Remix/Reactjs, Polaris, and Shopify's Admin Graphql API. The app design will be divided into several parts, which we will get into shortly 😎!

### Why a Product Review app?

###### We believe this is the best challenge to demonstrate your technical skills, problem-solving, and knowledge of Javascript Frameworks, Shopify, and Graphql.

### What's the goal of this challenge? ⚽

###### I'm glad you asked! We want to understand your abilities by measuring how readable your code is, how you approach problems, and your attention to detail.

### What's the process like? 

###### Feel free to spend as much OR as little of the allotted time to complete this challenge. Please complete the challenge to the best of your abilities and submit your repo via email for review.
###### We look forward to your submission and will respond once we've reviewed 😄!

### Project Requirements:

###### Make sure you setup these tools **before** starting this challenge!

1. [Node LTS version](https://nodejs.org/en/download)
2. [Shopify Partner Account](https://accounts.shopify.com/signup)
3. [Shopify Development Store](https://partners.shopify.com/) -> Stores -> Create a development store -> Create a store to test and build -> Start with test data -> Create development store
4. [PNPM](https://pnpm.io/installation) -> We use this as our only node package manager!

### Commands:

1. `pnpm dev --reset` -> You should only need to run this when you **first** start!
2. `pnpm dev`
3. `pnpm graphql-codegen` -> Use this to generate types for your graphql queries/mutations

### Resources:

1. [Remix](https://remix.run/docs/en/main/start/quickstart)
2. [Shopify App Remix](https://shopify.dev/docs/api/shopify-app-remix/v3)
3. [Polaris](https://polaris.shopify.com/components)
4. [Shopify Liquid](https://shopify.dev/docs/api/liquid)
5. [Shopify Admin Graphql](https://shopify.dev/docs/api/admin-graphql)
6. [Shopify Theme App Extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)

**Please feel free to use other libraries, if needed, do try to keep the library usage to a minimum**

### Before you start

1. Ensure your generated ["shopify.app.toml"](shopify.app.toml) file, after running `pnpm dev --restart`, is similar to the ["example.shopify.app.toml"](example.shopify.app.toml) file.
2. Review the following [excalidraw diagram](https://excalidraw.com/#json=pOeUI2EiXtNAmJ5imDDij,rrdDjrWsqPorbRrO_onrVA) for the project overview.

### Important Note!

##### If you want syntax highlighting for the graphql queries, please start every query/mutation **string** with `#graphql`

#### Challenge Goals

- [ ] When the app is accessed through the admin menu, the user must be able to see all the reviews tied to each individual product.
- [ ] There should be a way for a user to add a review to a product through the product page.
  - [ ] Modify the ["review-embed"](extensions/review-embed) to create the ui for adding a review to a product from a product page.
  - [ ] Create a [proxy endpoint](app/routes/api.public.review.$productId/route.tsx). This endpoint should receive reviews from the "review-embed" extension and apply the reviews to the associated products.
- [ ] The stored review data must at least keep track of the star rating and a message. Whatever other data you store and how you store the review is entirely up to you.

##### Extras (Not required)!

- [ ] The review-embed should only allow products to be reviewed, if a customer is signed in and if the customer has reviewed the product before.
- [ ] A way to sort the reviews of a product by rating.
- [ ] A theme app extension for rendering all the reviews for a product on a product page.
- [ ] A theme app extension for rendering the star rating of a product.
- [ ] A way to search trhough reviews for specific keywords.
- [ ] A way for an admin to approve or disapprove reviews, which will determine whether or not the listed review appears on the site.
- [ ] A way for the customer to edit a review.

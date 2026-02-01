# 🥗 NutriLens AI
## Food Intelligence Scanner & Recipe Mutation Engine
### Powered by Foodoscope APIs

---

# 📌 System Overview

NutriLens AI is a computational food intelligence platform that:

- **Scans food** via camera
- **Detects ingredients** automatically (OCR + Vision)
- **Computes nutrition** using Foodoscope APIs
- **Evaluates health score**
- **Generates recipes**
- **Mutates recipes** into healthier & Indian-friendly versions
- **Personalizes meals** for users

---

# 🎯 Core Idea

**Transform:** Food (Image/Text) → Structured Data → Nutrition Intelligence → Actionable Recipes → Healthy Indian Meals

---

# 🏗 High-Level Architecture

```mermaid
flowchart TD
    A[Mobile/Web App] --> B[API Gateway]
    B --> C[Backend Services]
    C --> D[Food Intelligence Engine]
    D --> E[Foodoscope APIs]
    D --> F[Database]

🧩 Layered Architecture
Layer 1 — Presentation Layer
Camera Scan

User Inputs

Meal Plans

Dashboard

Layer 2 — API Gateway
Auth

Routing

Rate limiting

Layer 3 — Backend Services
Image Processing

Classification

Nutrition Engine

Recipe Engine

Mutation Engine

LLM Orchestrator

Layer 4 — Food Data
RecipeDB

FlavorDB

Layer 5 — Storage
Users

Meals

History

🔁 COMPLETE END-TO-END FLOW
Code snippet
flowchart LR
    A[User Scan] --> B[Image Processing]
    B --> C[Ingredient Detection]
    C --> D[Nutrition Analysis]
    D --> E[Recipe Generation]
    E --> F[Recipe Mutation]
    F --> G[Final Meal Plan]
🔍 STEP-WISE ARCHITECTURE FLOWS
🟡 Step 1 — Image Scan & Detection
Description
User fridge/packet ka photo upload karta hai.

System OCR + Computer Vision se ingredients detect karta hai.

Flow
Code snippet
flowchart TD
    A[User Camera] --> B[Image Upload]
    B --> C[Preprocess]
    C --> D[OCR/Text Detection]
    C --> E[Object Detection]
    D --> F[Ingredients List]
    E --> F
Output
JSON
["milk", "spinach", "bread", "paneer"]
🟡 Step 2 — Food Classification
Description
Items ko classify kiya jata hai:

veg/non-veg

processed/raw

healthy/unhealthy

Flow
Code snippet
flowchart TD
    A[Ingredients] --> B[Rule Engine]
    B --> C[Veg/NonVeg]
    B --> D[Processed/Raw]
    B --> E[Health Tag]
🟡 Step 3 — Nutrition Intelligence (Foodoscope Integration)
Description
Foodoscope APIs se nutrition fetch karte hain.

Flow
Code snippet
flowchart TD
    A[Ingredients] --> B[Backend]
    B --> C[RecipeDB API]
    B --> D[FlavorDB API]
    C --> E[Nutrition Data]
    D --> E
Output
Calories, Protein, Carbs, Fat, Health Score

🟡 Step 4 — Recipe Generation
Description
Available ingredients se matching recipes generate karte hain.

Flow
Code snippet
flowchart TD
    A[Ingredients] --> B[Recipe Query Engine]
    B --> C[RecipeDB]
    C --> D[Filtered Recipes]
🟡 Step 5 — Recipe Mutation Engine ⭐ (Core Innovation)
Description
Recipes ko healthier, locally available, and Indian-friendly banata hai.

Flow
Code snippet
flowchart TD
    A[Original Recipe] --> B[Nutrition Analysis]
    B --> C[Substitution Engine]
    C --> D[Flavor Matching]
    D --> E[Indian Adaptation Rules]
    E --> F[Mutated Recipe]
Example Substitution
Cream → Curd

Maida → Atta

Butter → Ghee-lite

🟡 Step 6 — LLM Orchestration
Description
Natural language processing to convert user intent into structured queries.

Flow
Code snippet
flowchart TD
    A[User Prompt] --> B[LLM]
    B --> C[Structured JSON]
    C --> D[Recipe Engine]
    D --> E[Cooking Steps]
🟡 Step 7 — Final Output Delivery
Description
User interface results delivery.

Flow
Code snippet
flowchart TD
    A[Meal Plan] --> B[UI Rendering]
    B --> C[Dashboard]
    B --> D[Cooking Guide]
    B --> E[Nutrition Chart]
🧠 Core Brain (Food Intelligence Engine)
Code snippet
flowchart TD
    A[Nutrition Logic]
    B[Recipe Logic]
    C[Substitution Logic]
    D[Flavor Matching]
    E[Personalization]

    A --> F[Food Intelligence Engine]
    B --> F
    C --> F
    D --> F
    E --> F
🗄 Database Schema (Logical)
Code snippet
erDiagram
    USERS ||--o{ MEALS : has
    USERS ||--o{ SCANS : performs
    MEALS ||--o{ RECIPES : contains
    RECIPES ||--o{ INGREDIENTS : uses
🚀 Deployment Architecture
Code snippet
flowchart LR
    A[Frontend] --> B[Backend Server]
    B --> C[Database]
    B --> D[Foodoscope APIs]
    B --> E[LLM Service]
⚙ Scalability Strategy
Stateless backend for easy replication.

Cached API responses to reduce latency and cost.

Async processing for heavy Vision/OCR tasks.

Microservices for independent scaling of engines.

🎯 MVP Scope (Hackathon)
✅ Must Build
Image scan & ingredient detection.

Foodoscope nutrition fetch.

Basic recipe suggestion.

Simple mutation engine (e.g., Maida to Atta).

❌ Avoid
Complex ML training.

Over-engineered infra.

Large social/community features.

✅ Final Summary
NutriLens AI:

Sees food

Understands nutrition

Generates meals

Mutates recipes

Makes healthy eating automatic

Not a recipe app. Not a diet tracker. A Computational Food Intelligence System.



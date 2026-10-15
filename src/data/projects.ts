import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "SPE DSEATS Datathon: Oil Presence Prediction & Physics-Informed ML",
    slug: "spe-dseats-datathon-oil-presence-prediction",
    category: "Energy Data Science",
    role: "Machine Learning Engineer",
    projectType: "Competitive ML & Physics-Informed Modeling",
    description:
      "Engineered machine learning and domain-aware physics-informed models for the SPE DSEATS Africa 2026 Datathon to predict subsurface hydrocarbon presence from petrophysical datasets.",
    impact:
      "Formulated a dual-track submission strategy blending Gradient Boosting with physics-constrained SVM modeling, lithology-driven KNN imputation, and physical boundary clamping.",
    context:
      "Subsurface exploration requires navigating complex petrophysical measurements with sparse, noisy data. Purely statistical machine learning models often predict physically impossible subsurface conditions without domain constraints.",
    challenge:
      "Accurately predicting binary oil presence across complex geological formations while handling missing logs, rock-type-dependent properties, and maintaining physical validity under unseen test conditions.",
    keyQuestions: [
      "How do purely data-driven algorithms compare against physics-constrained models in subsurface characterization?",
      "What rock-physics rules (e.g., shale permeability limits and boundary clamping) provide the greatest regularization against overfitting?",
      "How can KNN imputation be constrained by trap types and rock lithology to prevent physical leakage?",
    ],
    approach: [
      "Engineered a dual submission pipeline: Part 1 utilizes a pure Gradient Boosting Classifier across 100% of the training features.",
      "Built a domain-aware physics-informed pipeline enforcing physical rules including shale permeability overrides and rock/trap-type KNN imputation.",
      "Applied physical boundary clamping and feature scaling prior to training a Support Vector Machine (SVM) model.",
      "Validated submission pipelines and output formats against competition benchmark specifications.",
    ],
    outcomes: [
      "Delivered high-confidence predictive submissions for both blind data-driven and physics-informed benchmarks.",
      "Demonstrated that incorporating geological domain rules significantly stabilizes model predictions in low-data regimes.",
      "Created a clean, modular Python codebase for repeatable feature preprocessing and test-set inference.",
    ],
    takeaways: [
      "Domain physics acts as an essential regularizer when training machine learning models on geological data.",
      "A dual-track strategy (pure ML vs. physics-informed) allows benchmarking raw model capacity against domain-consistent constraints.",
      "Data preparation in geoscience must respect lithological constraints rather than relying purely on generic imputers.",
    ],
    tags: ["Machine Learning", "Python", "Geoscience", "Physics-Informed ML", "Scikit-Learn"],
    tools: ["Python", "Scikit-Learn", "Gradient Boosting", "SVM", "Pandas"],
    githubUrl: "https://github.com/Jumah04/spe-dseats-datathon-2026",
    featured: true,
  },
  {
    title: "Multi-Target LPG Price Prediction & Market Intelligence System",
    slug: "lpg-price-prediction-market-intelligence",
    category: "Predictive Analytics",
    role: "Data Scientist",
    projectType: "Multi-Output Machine Learning",
    description:
      "Developed a robust Multi-Target Machine Learning system for predicting LPG (cooking gas) retail prices across Nigerian states using macroeconomic indicators, seasonal context, and geographical features.",
    impact:
      "Achieved an average test R² of 0.9565 across three targets and deployed an interactive Streamlit web application enabling localized live price estimates.",
    context:
      "LPG prices experience severe volatility driven by complex macroeconomic factors, creating information asymmetry for consumers, distributors, and policymakers who lack real-time intelligence for planning and regulation.",
    challenge:
      "Simultaneously predicting retail prices at three granularity levels (per kg, 5kg, and 12.5kg cylinders) across 37 geographical regions while managing highly correlated macroeconomic variables.",
    keyQuestions: [
      "How do macroeconomic factors like Dollar exchange rates and PMS prices impact local cooking gas prices?",
      "What is the true effect of regional conflicts and festive seasons on retail energy pricing?",
      "Can geographical features be retained without overfitting or arbitrarily pruning less-populated areas?",
    ],
    approach: [
      "Integrated monthly state-level price records with macroeconomic indicators and binary flags for conflict and festive periods.",
      "Engineered standardized target variables and unified FX indicators to eliminate multicollinearity.",
      "Conducted a rigorous Geographical Feature Ablation Study to empirically determine the optimal spatial resolution.",
      "Trained and evaluated Multi-Target models (Random Forest, XGBoost) using 5-Fold Cross-Validation.",
    ],
    outcomes: [
      "Identified Dollar exchange rate (~67% importance) and PMS price as the primary drivers of LPG pricing.",
      "Confirmed that festive price surges are driven by local retail demand rather than international crude oil supply factors.",
      "Deployed an interactive Streamlit application allowing users to obtain live, localized price estimates.",
    ],
    takeaways: [
      "Non-linear relationships dominate energy pricing dynamics, requiring complex models over standard linear approaches.",
      "Geographical context is critical; retaining state and region features improved model accuracy significantly.",
      "A principled feature ablation study is safer than arbitrary feature importance pruning for preserving geographical identity.",
    ],
    tags: ["Machine Learning", "Python", "Streamlit", "Data Science"],
    tools: ["Python", "Scikit-Learn", "XGBoost", "Streamlit"],
    githubUrl: "https://github.com/Jumah04",
    featured: true,
  },
  {
    title: "PetroTech Well Production Simulator & Decline Curve Analysis",
    slug: "petrotech-well-production-simulator",
    category: "Petroleum Engineering Analytics",
    role: "Petroleum Analytics Engineer",
    projectType: "Computational Modeling & Production Forecasting",
    description:
      "Interactive oil and gas production forecasting system and computational engine implementing Arps' Exponential Decline Curve Analysis (DCA) for single and multi-well asset evaluation.",
    impact:
      "Automated annual rate decline simulations, cumulative hydrocarbon recovery calculations, and multi-well comparative visualizations for field development planning.",
    context:
      "In petroleum and reservoir engineering, estimating future hydrocarbon recovery and forecasting production rates over time is vital for asset valuation, field development planning, and economic feasibility assessments.",
    challenge:
      "Modeling exponential production rate declines across multiple wells with varying initial rates, decline coefficients, and operational lifespans without manual spreadsheet errors.",
    keyQuestions: [
      "How does nominal exponential decline rate sensitivity affect estimated ultimate recovery over a multi-year horizon?",
      "How can engineers quickly configure and compare production profiles across diverse field wells?",
      "What computational framework best blends deterministic physics formulas with interactive data visualization?",
    ],
    approach: [
      "Implemented J.J. Arps' empirical exponential decline model into a flexible Python simulation engine.",
      "Designed a multi-well parameter registration engine supporting custom initial rates, decline rates, and forecast lifespans.",
      "Calculated vital reservoir analytics including cumulative production and average annual production rates.",
      "Generated automated visual production decline curves and formatted tabular summaries for engineering reports.",
    ],
    outcomes: [
      "Built a robust, deterministic simulation notebook and Python tool for rapid well performance forecasting.",
      "Enabled instant multi-well parameter comparison and decline trajectory forecasting for petroleum engineering workflows.",
      "Delivered as the Capstone Project for the prestigious PetroTech 2.0 Program.",
    ],
    takeaways: [
      "Empirical analytical models remain foundational in reservoir engineering for rapid, interpretable asset screening.",
      "Clean computational code replaces brittle spreadsheets while ensuring reproducible decline curve calculations.",
      "Combining mathematical modeling with interactive graphical outputs accelerates engineering decision-making.",
    ],
    tags: ["Python", "Petroleum Engineering", "DCA", "Data Visualization", "Numerical Modeling"],
    tools: ["Python", "NumPy", "Matplotlib", "Pandas"],
    githubUrl: "https://github.com/Jumah04/petrotech-well-production-simulator",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

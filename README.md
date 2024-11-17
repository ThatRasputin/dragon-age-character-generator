# Dragon AGE Character Builder

## Description

Dragon AGE Character Builder is a web application that guides users through creating characters for Green Ronin's Dragon AGE tabletop RPG. Built with React and TypeScript, this app streamlines the character creation process, making it more accessible and enjoyable for players.

## Features

- Intuitive step-by-step character creation process
- Dynamic ability score calculation
- Background and class selection with detailed information
- Responsive design for desktop and mobile use
- Built with modern web technologies (React, TypeScript)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- Yarn package manager

## Installation

1. Clone the repository:
   ```
   bash
   git clone https://github.com/your-username/dragon-age-character-builder.git
   ```

2. Navigate to the project directory:
   ```
   bash
   cd dragon-age-character-builder
   ```

3. Install dependencies:
   ```
   bash
   yarn install
   ```


## Running the Application

To start the development server:
    ```
    bash
    yarn start
    ```

## Project Structure

```
dragon-age-character-builder/
├── src/
│ ├── components/
│ │ ├── AbilitiesDisplay.tsx
│ │ ├── BackgroundTab.tsx
│ │ ├── BiographyTab.tsx
│ │ ├── CharacterForm.tsx
│ │ ├── CharacterSummary.tsx
│ │ ├── ClassTab.tsx
│ │ ├── DarkModeToggle.tsx
│ │ ├── EquipmentTab.tsx
│ │ ├── SettingsModal.tsx
│ │ ├── TabNav.tsx
│ │ └── Utils.ts
│ ├── data/
│ │ ├── abilityRolls.ts
│ │ ├── backgroundData.ts
│ │ ├── classData.ts
│ │ ├── focusData.ts
│ │ ├── powersData.ts
│ │ └── raceData.ts
│ ├── styles/
│ │ ├── App.css
│ │ ├── colors.css
│ │ └── modal.css
│ ├── App.tsx
│ └── index.tsx
├── public/
├── package.json
├── tsconfig.json
└── README.md
```
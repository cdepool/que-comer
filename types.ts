
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AdvantageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  name: string;
  description: string;
  logo: string;
}

export interface PromptDoc {
  section: string;
  prompt: string;
}
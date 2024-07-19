import React from "react";


export interface ButtonProps {
  children: React.ReactNode,
  style?: StyleButton,
  className?: string
} 

export type StyleButton = 'default' | 'bottomless'
"use client"; // <-- Add this at the very top

import React from 'react';
import Provider from './provider';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

function ConvexClientProvider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <ConvexProvider client={convex}>
      <Provider>
        {children}
      </Provider>
    </ConvexProvider>
  );
}

export default ConvexClientProvider;


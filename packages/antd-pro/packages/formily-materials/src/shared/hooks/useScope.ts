import { useContext } from 'react';
import { SchemaExpressionScopeContext } from '@formily/react';

export const useScope = () => {
  const appContext = useContext<any>((window as any).__appContext);

  const expressionScope = useContext<any>(SchemaExpressionScopeContext);

  return {
    $this: appContext?.pageContext,
    ...(expressionScope || {}),
  };
};

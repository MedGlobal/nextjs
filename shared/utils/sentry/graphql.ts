import * as Sentry from '@sentry/react';

function shouldRaiseGQLException<GQLException>(error: GQLException): boolean {
  if (error) return true;
  return false;
}

export function GQLCatcher<GQLException>(error: GQLException): void {
  if (shouldRaiseGQLException(error)) {
    Sentry.captureException(error);
  }
}

export default GQLCatcher;

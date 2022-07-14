import * as Sentry from '@sentry/react';
import shouldRaise from './shouldRaise';

function GQLCatcher<GQLException>(error: GQLException): void {
  if (shouldRaise(error)) {
    Sentry.captureException(error);
  }
}

export default GQLCatcher;

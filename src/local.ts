import { context } from '@actions/github';
import dotenv from 'dotenv';

import * as c from './core';

dotenv.config();

const env = process.env;

const jwt = env.JWT;

type Context = typeof context;

(async () => {
  const ctx0 = {
    eventName: 'push',
    workflow: 'build-test',
    job: 'build',
    runId: 178585234,
    actor: 'haishanh',
    ref: 'refs/heads/master',
    sha: 'acd0816c3dbae740ca163ebe5bfac4afed28d663',
    repo: { owner: 'haishanh', repo: 'foo' },
  } as Context;

  if (env.JWT) {
    await c.run(null, jwt, '', ctx0, 'failure');
  }
  if (env.BOT_TOKEN && env.CHAT_ID) {
    await c.run(env.BOT_TOKEN, undefined, env.CHAT_ID as string, ctx0, 'success');
  }
})();

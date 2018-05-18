import cache from 'memory-cache';
import config from 'config';

const cacheTime = config.get('cache.ttl');

export default cache;

export async function getOrElse(key, callback, time = cacheTime, timeoutCallback) {
  let result = cache.get(key);

  if (result != null) { // Cache hit
  } else { // Cache miss
    result = await Promise.resolve(callback())
      .then((res) => {
        cache.put(key, res, time, timeoutCallback);
        return res;
      });
  }

  return result;
}

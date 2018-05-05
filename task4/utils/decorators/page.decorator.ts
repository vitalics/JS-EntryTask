import 'reflect-metadata';
import { Page } from '@task/pages';

export function page<FPage extends Page>(url: string): any {
  return function(target: FPage): Object {
    Reflect.defineMetadata('url', url, target);
    return target;
  };
}

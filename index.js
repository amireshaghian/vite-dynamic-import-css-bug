import './index.css';
export default async function foo() {
  await import('./dyn.css');
  return "foo";
}

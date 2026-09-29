declare module "*.css";
declare module '*.jpg' {
    const content: string;
    export default content;
}
declare module "index" {
    export function prefixClassBubble(namespace: any): (node: any) => void;
    export function bemBubble(namespace: any): (node: any) => void;
    export function semanticClassBubble(): (node: any) => void;
}

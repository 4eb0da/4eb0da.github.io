declare interface OpaqueRange extends AbstractRange {
    disconnect(): void;
    getBoundingClientRect(): DOMRect;
}

declare interface HTMLInputElement {
    createValueRange(from: number, to: number): OpaqueRange;
}

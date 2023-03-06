let lastDelayId: number;

export default function dispatchResizeEvent() {
    clearTimeout(lastDelayId);

    lastDelayId = window.setTimeout(function () {
        if (window.dispatchEvent) {
            window.dispatchEvent(new Event('resize'));
        }
    }, 10);
}

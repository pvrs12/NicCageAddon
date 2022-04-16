const INTERVAL_KEY = "refresh-interval";
// default to 1s refresh window
const DEFAULT_INTERVAL = "1000";

const MIN_INTERVAL = 500;
const MAX_INTERVAL = 5000;

function save_interval() {
    let interval_setting = document.getElementById("interval-setting");
    let interval = interval_setting.value;
    let interval_num = Number(interval);

    if (interval_num < 500 || interval_num > 5000) {
        // revert to old storage
        browser.storage.local.get().then(
            (item) => {
                let interval = get_interval_or_default(item);
                document.getElementById("interval-setting").value = interval;
            },
            (_) => {
                document.getElementById("interval-setting").value = DEFAULT_INTERVAL;
            }
        );
        return;
    }

    // all clear, update the storage
    browser.storage.local.set({
        INTERVAL_KEY: interval
    });
}

function get_interval_or_default(item) {
    if (!item || item === {} || !(INTERVAL_KEY in item)) {
        browser.storage.local.set({
            INTERVAL_KEY: DEFAULT_INTERVAL
        });
        return DEFAULT_INTERVAL;
    } else {
        return item[INTERVAL_KEY];
    }
}

// hook save button
document.getElementById("save-button").addEventListener("click", save_interval);

// setup defaults
browser.storage.local.get().then(
    (item) => {
        let interval = get_interval_or_default(item);
        document.getElementById("interval-setting").value = interval;
    },
    (_) => {
        document.getElementById("interval-setting").value = DEFAULT_INTERVAL;
    }
);
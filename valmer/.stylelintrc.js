module.exports = {
    extends: '@ptsecurity/stylelint-config',
    plugins: ['stylelint-scss'],
    rules: {
        'no-invalid-position-at-import-rule': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    }
};

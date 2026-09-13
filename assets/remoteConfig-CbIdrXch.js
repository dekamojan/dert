const cached = {
  "version": "3.0.0, 3.0.1, 3.0.2, 3.0.3, 3.0.4, 3.0.5, 3.0.6, 3.0.7, 3.0.8, 3.0.9, 3.0.10",
  "hash": "xxh65ryghftgrws24423255fef750422p",
  "selectors": {
    "charactersTabButton": "mat-list-item:has(mat-icon:contains('accessibility_new'))",
    "charactersNameSelector": "div[data-tile-id] img:visible",
    "createProjectButton": "button:has(mat-icon:contains(\"add_2\")):first()",
    "backProjectButton": "button:has(mat-icon:contains(\"arrow_back\"))",
    "configureUIModeButton": "button:has(mat-icon:contains(\"settings_2\"))",
    "selectGridModeOption": "div[role=\"menu\"] > div[data-orientation=\"horizontal\"]:eq(0) button:eq(0)",
    "selectSizeGridModeOption": "div[role=\"menu\"] > div[data-orientation=\"horizontal\"]:eq(1) button:eq(0)",
    "selectShowTextModeOption": "div[role=\"menu\"] > div:has(i:contains(visibility)) button:eq(1)",
    "selectClearPromptModeOption": "div[role=\"menu\"] > div:has(i:contains(ink_eraser)) button:eq(1)",
    "closeConfigureUIModeButton": "button:has(mat-icon:contains(\"settings_2\"))",
    "configButton": "button[aria-label=\"Settings trigger\"], button:has(mat-icon:contains(\"crop\")), button:has(mat-icon:contains(\"tune\"))",
    "removeSelectedImagesButton": "button:has(mat-icon:contains(\"close\")):has(span:contains(\"prompt\"))",
    "disableAgentModeButton": "div:has(div[data-scroll-state=\"START\"]) button[aria-pressed=\"true\"], button:has(mat-icon:contains(\"close\")):has(span:contains(\"prompt\")), div:has(mat-icon:contains(\"edit_square\")) > button:has(mat-icon:contains(\"close\"))",
    "enableAgentModeButton": "div:has(div[data-scroll-state=\"START\"]) button[aria-pressed=\"false\"], button:has(mat-icon:contains(\"expand_content\"))",
    "neverAskAgentSettingButton": "div[role=\"radiogroup\"] button:last()",
    "saveAgentSettings": "div[style*=\"width\"]:has(div[aria-orientation=\"vertical\"]) button:has(div[data-type=\"button-overlay\"]):last()",
    "configButtonActived": "button[aria-label=\"Settings trigger\"], button:has(mat-icon:contains(\"crop\")), button:has(mat-icon:contains(\"tune\"))",
    "modelSelectButton": "button[aria-label=\"Select model family\"]",
    "selectVideoMode": "flow-toggles[aria-label=\"Mode\"] button:has(mat-icon:contains(\"videocam\"))",
    "selectImageMode": "flow-toggles[aria-label=\"Mode\"] button:has(mat-icon:contains(\"image\"))",
    "imageToVideoModeOption": "flow-toggles[aria-label=\"Video type\"] button:has(span.toggle-text:contains(\"Frames\"))",
    "componentToVideoModeOption": "flow-toggles[aria-label=\"Video type\"] button:has(span.toggle-text:contains(\"Ingredients\"))",
    "textToVideoModeOption": "flow-toggles[aria-label=\"Video type\"] button:has(span.toggle-text:contains(\"Ingredients\"))",
    "aspectRatioTemplate": "flow-toggles[aria-label=\"Aspect ratio\"] button:has(span.toggle-text:contains(\"{aspectRatio}\"))",
    "addImageButton": "button.add-menu-trigger[aria-label*=\"Add ingredients\" i]",
    "outputCountTemplate": "flow-toggles[aria-label=\"Output count\"] button:has(span.toggle-text:contains(\"{outputCount}\"))",
    "modelTemplate": "div.mat-mdc-menu-content flow-menu-item button:has(span.label:contains(\"{model}\"))",
    "fileInput": "input[type=\"file\"]",
    "videoLengthTemplate": "flow-toggles[aria-label=\"Video duration\"] button:has(span.toggle-text:contains(\"{videoLength}\"))",
    "videoResolutionTemplate": "flow-toggles[aria-label=\"Video resolution\"] button:has(span.toggle-text:contains(\"{videoResolution}\"))",
    "promptTextarea": "div.ProseMirror[contenteditable=\"true\"]",
    "submitButton": "button:has(mat-icon:contains(\"arrow_forward\"))",
    "stopButton": "button:has(mat-icon:contains(\"stop\"))",
    "uploadMediaButton": "button:has(mat-icon:contains(\"upload\")):last()",
    "selectUploadImageType": "button.sidebar-upload-btn",
    "agreeTermUploadedVideoButton": "div[role=\"dialog\"]:contains(\"policies\") button:eq(-1)",
    "selectUploadVideoType": "button.sidebar-upload-btn",
    "selectUploadCharacterType": "button.sidebar-upload-btn",
    "selectSpeakerType": "button.sidebar-upload-btn",
    "sortOptionsButton": "div[data-side=\"top\"] button[aria-haspopup=\"menu\"]:last(), mat-select.sort-selector-dropdown",
    "sortLatestOption": "div[role=\"menu\"] > button:eq(2), mat-select.sort-selector-dropdown",
    "virtuosoItemList": "cdk-virtual-scroll-viewport .asset-item-container > button.asset-item",
    "firstFoundedItemSelector": "cdk-virtual-scroll-viewport .asset-item-container > button.asset-item:has(span.asset-title:contains(\"{filename}\")) img.asset-thumbnail-image",
    "searchUploadedImage": "input.search-input",
    "outputItems": "flow-grid-tile-container",
    "tileOnQueue": "flow-pending-tile, div.loading-percentage",
    "tileByIdTemplate": "flow-grid-tile-container[data-ext-tid=\"{tileId}\"]",
    "tileEditLinkTemplate": "flow-grid-tile-container[data-ext-tid=\"{tileId}\"] a[href*=\"/edit/\"]",
    "moreOptionsButtonInHoverTile": "button:has(mat-icon:contains(\"more_vert\"))",
    "downloadButtonInHoverTile": "button[aria-haspopup=\"menu\"]:has(mat-icon:contains(\"download\"))",
    "quality2KOption": "button:has(span:contains(\"2K\"))",
    "quality1080Option": "button:has(span:contains(\"1080p\"))",
    "quality4KOption": "button:has(span:contains(\"4K\"))",
    "downloadDoneButton": "button:has(mat-icon:contains(\"check\")), header button:last(), button:has(span:contains(\"Done\"))",
    "openProfileInfoButton": "button > img[width=\"32\"][height=\"32\"]",
    "quality720Option": "button:has(span.label:contains(\"720p\")):not([disabled])",
    "quality270Option": "button:has(span.label:contains(\"270p\")):not([disabled])",
    "closeProfileInfoButton": "div[role=\"dialog\"] button:has(mat-icon:contains(\"close\"))",
"addToPromptButton": "button.detail-add-to-prompt-btn"
  }
};

async function g() {
  return cached;
}

function i(config, version) {
  return config.version
    .split(",")
    .map(v => v.trim())
    .filter(Boolean)
    .includes(version.trim());
}

export { g, i };
# Mini toggler
This is supposed to be a __minimalistic__ Javascript content toggler in terms of __file size__ and __features__. And it should be independent.

## Usage
### Basic usage
The JS is using anchor links to know which content to toggle. All you need is to set that and then add the class `.mini-toggler` to the anchor links.

    <a href="#basic-content" class="mini-toggler">Show / hide my content</a>
    <div id="basic-content">Hello. This is the content that's going to be toggled.</div>

### Tab style usage
By adding a group-attribute to the togglers you can group them together making them __work just like tabs__; When you show one you also hide all the others in the group.

    <a href="#content-1" class="mini-toggler" data-toggler-group="my-tabs">Tab 1</a>
    <a href="#content-2" class="mini-toggler" data-toggler-group="my-tabs">Tab 2</a>

    <div id="content-1">Here is my first content</div>
    <div id="content-2" class="hidden">Here is my second content.</div>

### No CSS is created
You need to create the css by yourself. All the Javascript is doing is adding / removing classes. The clicked anchor link gets the class `.toggler-active` when it's active and the content gets `.active`. The `.hidden`-class is used if you want to hide something from the start.
  
    .toggler-active {
      font-weight: bold;
    }
    .active {
      display: block;
    }
    .hidden {
      display: none;
    }

## Browser support
Because of the usage of `String.trim`, `querySelectorAll` and `addEventListener` without any polyfills (fallbacks) included the __oldest IE supported is IE8__.
---
title: 'Colors'
weight: 2
layout: single--subpage
menu:
  main:
    parent: 'visual-style'
---

The [color palette](https://phabricator.wikimedia.org/M82) represents our character and brings a hint of freshness to our products.

![color palette](Color-palette-2017-01-15-simplified.png)

Because content readability for everyone is our main goal, we have made accessibility considerations a top priority. Each color in the palette indicates its [WCAG](https://www.w3.org/WAI/intro/wcag "Web Content Accessibility Guidelines 2.0") conformance level (“AA” or “AAA”). This level is based on a color's contrast against white or black.

## Base colors

Base colors define the content surface and the main color for content. Different shades of paper and ink are useful to emphasize or de-emphasize different content areas.

Base colors range from pure white (Base100) to true black (Base0). Intermediate shades of gray include a tint of blue for greater harmony with our accent colors.

When applying text on a surface, you need to [check the color contrast](http://webaim.org/resources/contrastchecker/) between the text and the background: 

-   Base100...50 are safe text colors for a black surface.
-   Base30...0 are safe text colors for a white surface.

{{< swatch_section >}}
  {{< swatch name="Base100" hex="#ffffff" rgb="RGB 255, 255, 255" hsb="HSB 0, 0%, 100%" wcag="AAA" >}}
  {{< swatch name="Base90"  hex="#f8f9fa" rgb="RGB 248, 249, 250" hsb="HSB 210, 1%, 98%" wcag="AAA" >}}
  {{< swatch name="Base80"  hex="#eaecf0" rgb="RGB 234, 236, 240" hsb="HSB 220, 3%, 94%" wcag="AAA" >}}
  {{< swatch name="Base70"  hex="#c8ccd1" rgb="RGB 200, 204, 209" hsb="HSB 213, 4%, 82%" wcag="AAA" >}}
  {{< swatch name="Base50"  hex="#a2a9b1" rgb="RGB 162, 169, 177" hsb="HSB 212, 8%, 69%" wcag="AAA" >}}
  {{< swatch name="Base30"  hex="#72777d" rgb="RGB 114, 119, 125" hsb="HSB 210, 9%, 49%" wcag="AA / AA" >}}
  {{< swatch name="Base20"  hex="#54595d" rgb="RGB 84, 89, 93"    hsb="HSB 207, 10%, 36%"  wcag="AA / AA" dark="true">}}
  {{< swatch name="Base10"  hex="#222222" rgb="RGB 34, 34, 34"    hsb="HSB 0, 0%, 13%"  wcag="AAA" dark="true" >}}
  {{< swatch name="Base0"   hex="#000000" rgb="RGB 0, 0, 0"       hsb="HSB 0, 0%, 0%" wcag="AAA" dark="true" >}}
{{< /swatch_section >}}

## Accent colors

Accent colors are used to emphasize actions and to highlight key information. Blue is a natural choice in our context, where it has been the default color used for links and conveys the idea of action.

There are three shades provided for when you need a lighter (Accent90), regular (Accent50) or a darker (Accent10) version of blue.

Accent50 is suitable to use for text and as background. When used for link text, this color provides sufficient contrast with black text. When used as background, it provides sufficient contrast with white text.

{{< swatch_section >}}
  {{< swatch name="Accent90" hex="#eaf3ff" rgb="RGB 234, 243, 255" hsb="HSB 214, 8%, 100%" wcag="AAA" >}}
  {{< swatch name="Accent50"  hex="#36c" rgb="RGB 51, 102, 204" hsb="HSB 220, 75%, 80%" wcag="AA" >}}
  {{< swatch name="Accent10"  hex="#2a4b8d" rgb="RGB 42, 75, 141" hsb="HSB 220, 70%, 55%" wcag="AAA" >}}
{{< /swatch_section >}}

## Utility colors

Utility colors are another type of accent color. Common meanings are associated with them.
We use shades of red, green, and yellow as utility colors.

{{< swatch_section >}}
  {{< swatch name="Red90" hex="#fee7e6" rgb="RGB 255, 231, 230" hsb="HSB 2, 10%, 100%" wcag="AAA" >}}
  {{< swatch name="Red50 Destructive"  hex="#d33" rgb="RGB 221, 51, 51" hsb="HSB 360, 77%, 87%" wcag="AA / AA" >}}
  {{< swatch name="Red30"  hex="#b32424" rgb="RGB 135, 54, 54" hsb="HSB 360, 60%, 53%" wcag="AAA" >}}
  {{< swatch name="Green90"  hex="#d5fdf4" rgb="RGB 213, 253, 244" hsb="HSB 167, 16%, 99%" wcag="AAA" >}}
  {{< swatch name="Green50"  hex="#00af89" rgb="RGB 0, 175, 137" hsb="HSB 167, 100%, 69%" wcag="AA" >}}
  {{< swatch name="Green30"  hex="#14866d" rgb="RGB 20, 134, 109" hsb="HSB 167, 85%, 53%" wcag="AA" >}}
  {{< swatch name="Yellow90"  hex="#fef6e7" rgb="RGB 254, 246, 231" hsb="HSB 39, 9%, 100%" wcag="AAA" >}}
  {{< swatch name="Yellow50"  hex="#fc3" rgb="RGB 255, 204, 51" hsb="HSB 45, 80%, 100%" wcag="AAA" >}}
  {{< swatch name="Yellow30"  hex="#ac6600" rgb="RGB 172, 102, 0" hsb="HSB 36, 100%, 67%" wcag="AA" >}}
{{< /swatch_section >}}

## Additional colors

Some use cases, such as charts and data visualization, may need a broader color palette. Aim for level AA contrast (4.5:1) when extending the default palette. Make sure to test how these colors are perceived at different color vision deficiency conditions.

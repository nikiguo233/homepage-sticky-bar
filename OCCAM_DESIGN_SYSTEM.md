<!--
  Occam Design System — converted from OCCAM_DESIGN_SYSTEM.md.docx
  Source: user-provided Word export (May 2026).
  Do not edit the .docx in-repo; update this .md or re-export from Figma/Occam.
-->

# <a id="_z90taac0hqqi"></a>Occam Design System — Source of Truth

Last extracted from Figma May 2026

## <a id="_pu8riva9b8k9"></a>Tech Stack & Source of Truth

### <a id="_swers7paab57"></a>What Occam Is

Occam is Zuora's shared design language, spanning multiple product teams. It covers foundations (color, typography, spacing, motion) and a component library built on top of [MUI](https://mui.com/) (Material UI).

### <a id="_smiwaqi79f8p"></a>Tech Stack

__Layer__

__Technology__

__Notes__

Component base

__MUI 7__ (Material UI)

Migrated from MUI 5; provides component behavior, accessibility, keyboard nav

Styling

__Occam design tokens__ (--zui-* CSS custom properties)

Applied on top of MUI base; Figma is the visual source of truth

Icons

__Material Symbols__ + Zuora custom SVGs

See Section 3

Storybook and GitHub

__Nav-v2  
__GH:[ https://github.com/zuora-platform/nav-v2](https://github.com/zuora-platform/nav-v2)  
SB:[ https://cdn.zuora.com/@platform-ui/nav-v2-sb/latest/index.html](https://cdn.zuora.com/@platform-ui/nav-v2-sb/latest/index.html)  


__app-builder__

GH:[ https://github.com/zuora-platform/app-builder](https://github.com/zuora-platform/app-builder)

SB:[ https://cdn.zuora.com/@platform-ui/app-builder-sb/latest/index.html?path=/docs/welcome--docs](https://cdn.zuora.com/@platform-ui/app-builder-sb/latest/index.html?path=/docs/welcome--docs)

__Occam__

GH:[ https://github.com/zuora-platform/zds-next](https://github.com/zuora-platform/zds-next)

GH Lighthouse components:[ https://github.com/zuora-platform/lighthouse-components](https://github.com/zuora-platform/lighthouse-components)

SB:[ https://cdn.zuora.com/@platform-ui/zds-next/latest/index.html?path=/docs/welcome--docs](https://cdn.zuora.com/@platform-ui/zds-next/latest/index.html?path=/docs/welcome--docs)

⚠️ Visual styles not yet updated to reflect Occam DS —  do not use as visual reference  
  


### <a id="_apv5m7d2i9cx"></a>__Source of Truth Hierarchy__

When there is a conflict between sources, follow this order:

1. This .md file ← compiled from Figma + Occam website

2. Figma design files ← canonical visual spec

3. Occam website ← occam.zuora.com (guidelines, usage rules)

4. MUI 7 docs ← component behavior, props, accessibility

5. Storybook ⚠️ out of sync — visual styles not reliable post MUI 5→7 migration

### <a id="_1m8j2ky2vame"></a>__  
  
How to Use This File for Mockups__

- __Colors:__ use color tockens from Section 2 directly; semantic tokens map to light/dark theme
- __Typography:__ use --zui-font-system stack with sizes and weights from Section 1
- __Components:__ reference variant/state tables in Section 9 to match correct props
- __Icons:__ use Material Symbols for standard icons; flag Zuora custom icons with a comment
- __Elevation:__ apply correct shadow level per component type (Section 5)
- __Shapes:__ default border-radius: 4px; chips use border-radius: 9999px; Card Drawer uses 8px
- __Theme:__ Always use the Nebula UI Shell theme as the default when building. Before starting, ask whether Horizon or Cosmos themes are needed instead.  
  


### <a id="_htzc1pn2nuty"></a>Figma Source Files

__File__

__Contents__

__Link__

00.1-Colors

Full color palette + semantic tokens

[Open](https://www.figma.com/design/skDvITvLf81kjwoDilQtBY/ZDS-Colors?node-id=0-1052&p=f&t=pVuSooY3Uv3q9XQs-0)

00.2-Typography

Type scale, CSS tokens, design tokens

[Open](https://www.figma.com/design/5PCCeY5ZgmnwB2vSx2hYzX/ZDS-Typography?node-id=1535-9&p=f&t=pVuSooY3Uv3q9XQs-0)

00.3-Icons

Material icons + Zuora custom icons

[Open](https://www.figma.com/design/un1c2EHQ855axEz5AJcCx2/Occam-Icons?node-id=308-2007&p=f&t=5X82KWsWau89qDx5-0)

01-Foundation

UI Shell, Page Header, Elevation, Grid

[Open](https://www.figma.com/design/FX4WhygmdWTzoOFjdem6hX/OCCAM-Foundation?node-id=0-1&p=f&t=pVuSooY3Uv3q9XQs-0)

02-Navigation

Breadcrumb, Global Nav, Link, Stepper, Tabs

[Open](https://www.figma.com/design/JpI83YkqlfZctCtki3W304/OCCAM-Navigation?node-id=0-1&p=f&t=5X82KWsWau89qDx5-0)

03-Input

All input components (15 total)

[Open](https://www.figma.com/design/XYbOgtmH4OTybiSBTRlKgC/03-Input)

04-Data-Display

Accordion, Avatar, Badge, Card, Chip, Data Grid, Drawer, Grouped Lists, Modal, Popover, Preview Panel, Widget

[Open](https://www.figma.com/design/2peCKz4CRSKcBzR0uyJHzN/OCCAM-Data-Display?node-id=0-1&p=f&t=5X82KWsWau89qDx5-0)

05-Feedback

Alert, Dialog, Progress, Skeleton, Snackbar, Tooltip

[Open](https://www.figma.com/design/iwcn5QMmp7nHziBxHo51z5/OCCAM-Feedback?t=pVuSooY3Uv3q9XQs-0)

06-Utilities

Glass Effect

[Open](https://www.figma.com/design/PFWNPJPwKrboh0pifevCY2/OCCAM-Utilities?t=5X82KWsWau89qDx5-0)

08-Data-Visualization

Line, Area, Bar, Horizontal Bar, Donut, Semi-Donut charts + chart elements

[Open](https://www.figma.com/design/OKxedZqTfPZmnWtmeowMRv/OCCAM-Data-Visualization?t=pVuSooY3Uv3q9XQs-0)

OCCAM-AI-Components

AI-specific components (8 total, 2 WIP)

[Open](https://www.figma.com/design/EEEsr6EeWZAxMAP9juC4g0/OCCAM-AI-Components?t=5X82KWsWau89qDx5-0)

### <a id="_luimahhtajr5"></a>Occam Website

Full guidelines at [occam.zuora.com](https://occam.zuora.com/foundations-overview) — covers accessibility, content strategy, motion, elevation, shapes, themes, and typography.

  
## What AI Tools Should Prioritize

1. Accessibility

2. Existing component reuse

3. Responsive behavior

4. Clear hierarchy

5. Minimal cognitive load

6. Theme consistency

7. Semantic color usage  
  
  
## AI Usage Rules  
When generating UI with Occam:

- Prefer existing Occam components before inventing new patterns
- Use semantic color tokens only
- Use 4px radius by default unless component exceptions are documented
- Prefer progressive disclosure over dense layouts
- Avoid decorative gradients unless explicitly part of the component
- Respect light/dark theme token mappings
- Use established spacing scale only
- Never introduce visual styles outside Occam foundations
- Preserve accessibility requirements in all generated UI  


## <a id="_ye6prw8d0rq9"></a>## Composition Rules

__### Forms__

- Use 16px vertical spacing between fields

- Group related fields inside Cards

- Avoid more than 2 columns in forms

- Use helper text sparingly  


__### Tables__

- Use Data Grid for datasets over 5 rows

- Use Grouped Lists for lightweight collections

- Bulk actions appear only after row selection  


__### Modals__

- Avoid nesting modals

- Prefer Drawers for multi-step workflows

- Confirmation dialogs should remain concise  
  


##When To Use Guidance

__### Use Modal When__

- blocking confirmation is required

- the user must make a decision before continuing  


__### Use Drawer When__

- preserving page context is important

- workflows involve multiple steps

- users may need reference information while editing

## Responsive Behavior

- Collapse multi-column layouts below tablet widths

- Tables should support horizontal scroll or condensed modes

- Avoid hover-only interactions  
  
  
## Interaction Principles  
- Feedback should appear immediately after user actions

- Loading states should preserve layout stability

- Use optimistic updates carefully

- Destructive actions require confirmation

- Focus states must always remain visible

## Content Guidelines  
__###Buttons:__

- Use verb-first labels

- Avoid vague labels like "Submit"  


__###Errors:__

- Explain what happened

- Explain how to recover  


__###AI Messaging:__

- Be transparent when AI-generated

- Avoid overstating certainty  


###Accessibility Tokens / Rules

- Never rely on color alone for meaning

- Use aria-live for async feedback

- Dialogs must trap keyboard focus

- All icon buttons require accessible labels

  


## Anti-Patterns

Do not generate:

- glassmorphism outside Glass Effect utility

- nested accordions

- floating unlabeled actions

- more than 3 hierarchy levels

- inconsistent card paddings

- decorative charts without data meaning

- excessive motion

  


## AI UX Guidelines

- AI-generated content should be distinguishable from user content

- Suggested actions should remain reversible

- Avoid implying certainty when confidence is low

- Provide human override paths

## <a id="_ip1bormjw4mu"></a>1. Typography

### <a id="_rpnixj1n3y16"></a>Fonts

__Role__

__Family__

__CSS Variable__

System / UI

-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif

--zui-font-system

Monospace / Code

'IBM Plex Mono', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace

--zui-font-monospace

Note: Figma uses SF Pro Display / SF Pro Text as design proxies for the system font stack.

### <a id="_b84qombbmq7p"></a>Type Scale — CSS Tokens

All tokens use the --zui-font-system family unless noted.

#### <a id="_1n02ll3ej1qw"></a>Headings

__Token__

__Size__

__Weight__

__Line Height__

__Letter Spacing__

__Text Case__

__Figma Style__

--font-display

36px

300 (Light)

44px

0

none

Headings/Normal/H3

--font-headline-l

28px

500 (Medium)

40px

0

none

Headings/Normal/H4

--font-headline-m

24px

500 (Medium)

36px

0

none

Headings/Normal/H5

--font-headline-s

20px

500 (Medium)

32px

0

none

Headings/Normal/H6

H1 (57px) and H2 (45px) exist in Figma but are marked as not used in ZDS 2.0 type ramp.

#### <a id="_tegqjabw33ck"></a>Titles / Subtitles

__Token__

__Size__

__Weight__

__Line Height__

__Letter Spacing__

__Text Case__

__Figma Style__

--font-title-l

17px

600 (Semibold)

28px

0.1px

none

Headings/Normal/Subtitle 3

--font-title-m

15px

600 (Semibold)

24px

0.15px

none

Headings/Normal/Subtitle 11

--font-title-s

13px

600 (Semibold)

20px

0.25px

none

Headings/Normal/Subtitle 2

--font-tab

13px

500 (Medium)

20px

0.1px

none

Headings/Normal/Subtitle 4 / Tab

#### <a id="_kjh4ty1tzk5o"></a>Body

__Token__

__Size__

__Weight__

__Line Height__

__Letter Spacing__

__Text Case__

__Figma Style__

--font-body-l

15px

400 (Regular)

24px

0

none

Body Text/Normal/Body 1

--font-body-l-bold

15px

500 (Medium)

24px

0

none

Body Text/Normal/Body 1 Bold

--font-body-m

13px

400 (Regular)

18px

0.1px

none

Body Text/Normal/Body 2

--font-body-m-bold

13px

500 (Medium)

18px

0.1px

none

Body Text/Normal/Body 2 Bold

#### <a id="_6dh3alefof4m"></a>Labels, Captions & Utility

__Token__

__Size__

__Weight__

__Line Height__

__Letter Spacing__

__Text Case__

__Figma Style__

--font-label

13px

400 (Regular)

18px

0.2px

none

Captions/Normal/Overline 6 / Label

--font-tableheader

12px

600 (Semibold)

16px

0.2px

none

Captions/Normal/Overline 2 / Table Header

--font-caption

11px

400 (Regular)

16px

0.2px

none

Captions/Normal/Caption

--font-overline

11px

600 (Semibold)

16px

1px

uppercase

Captions/Normal/Overline 4

--font-chip

10px

700 (Bold)

14px

0.6px

uppercase

Captions/Normal/Overline 5 / Chip

--font-button

13px

500 (Medium)

20px

0.1px

capitalize

Button-Action Text/BUTTON

--font-code

12px

400 (Regular)

18px

0

none

Code Text/Code · uses --zui-font-monospace

#### <a id="_tvqst6ocor1w"></a>Additional / Special

__Style__

__Size__

__Weight__

__Line Height__

__Letter Spacing__

__Text Case__

__Notes__

SurTitle

12px

400 (Regular)

17px

1.5%

uppercase

Inter; used for section labels

## <a id="_kp00ywrugegp"></a>2. Colors

### <a id="_dc39v1vo77wm"></a>Brand Palette

#### <a id="_9vscc8vg9ecj"></a>Navy

__Token__

__Hex__

Brand/Navy/900

#0b1116

Brand/Navy/800

#16212b

Brand/Navy/700

#223341

Brand/Navy/600

#33495c

Brand/Navy/500

#476176

Brand/Navy/400

#5f7b91

Brand/Navy/300

#7c97ac

Brand/Navy/200

#a0b6c6

Brand/Navy/100

#cbd8e1

Brand/Navy/050

#e3eaef

Brand/Navy/025

#f8f9fb

#### <a id="_yjqetqr6kki3"></a>Red (Brand / Magenta)

__Token__

__Hex__

Brand/Red/900

#1a000f

Brand/Red/800

#34001d

Brand/Red/700

#4e002c

Brand/Red/600

#68003b

Brand/Red/500

#81074c

Brand/Red/400

#9b1c64

Brand/Red/300

#b43e81

Brand/Red/200

#cd70a5

Brand/Red/100

#e6b1cf

Brand/Red/050

#f3d7e7

Brand/Red/025

#fcf5f9

#### <a id="_nrli1uagqimz"></a>Teal

__Token__

__Hex__

Brand/Teal/900

#001e1a

Brand/Teal/800

#003c35

Brand/Teal/700

#005a4f

Brand/Teal/600

#00786a

Brand/Teal/500

#009684

Brand/Teal/400

#00b49f

Brand/Teal/300

#00d2b9

Brand/Teal/200

#3ae6d2

Brand/Teal/100

#85fbed

Brand/Teal/050

#b6fff9

Brand/Teal/025

#eafffe

### <a id="_fm5i60zbnty1"></a>Monochrome

#### <a id="_yngltlr3gkrm"></a>Cool Gray

__Token__

__Hex__

Monochrome/Cool Gray/900

#141719

Monochrome/Cool Gray/800

#24292c

Monochrome/Cool Gray/700

#353b3f

Monochrome/Cool Gray/600

#464c51

Monochrome/Cool Gray/500

#575e63

Monochrome/Cool Gray/400

#767d82

Monochrome/Cool Gray/300

#959ba0

Monochrome/Cool Gray/200

#b5babe

Monochrome/Cool Gray/100

#d6d9db

Monochrome/Cool Gray/050

#f6f7f8

### <a id="_a9b5nqzg4bjg"></a>Extended Palette

#### <a id="_fhz2ys9mxs23"></a>Blue

__Token__

__Hex__

__Token__

__Hex__

Extended/Blue/900

#020f27

Extended/Blue/400

#3269d4

Extended/Blue/800

#031c4e

Extended/Blue/300

#5e8be5

Extended/Blue/700

#042a75

Extended/Blue/200

#8fb2f6

Extended/Blue/600

#06389c

Extended/Blue/100

#c6dcff

Extended/Blue/500

#0d4ac3

Extended/Blue/050

#e4f1ff

#### <a id="_closbzj61aaa"></a>Purple

__Token__

__Hex__

__Token__

__Hex__

Extended/Purple/900

#0e0722

Extended/Purple/400

#6f4dcd

Extended/Purple/800

#1d0f44

Extended/Purple/300

#916fef

Extended/Purple/700

#2d1866

Extended/Purple/200

#b69bfe

Extended/Purple/600

#3f2489

Extended/Purple/100

#e1d1ff

Extended/Purple/500

#5435ab

Extended/Purple/050

#f6ecff

#### <a id="_x8zmh0jvkv6w"></a>Red (Functional)

__Token__

__Hex__

__Token__

__Hex__

Extended/Red/900

#240300

Extended/Red/400

#db1f0e

Extended/Red/800

#490600

Extended/Red/300

#ff4635

Extended/Red/700

#6d0900

Extended/Red/200

#ff8073

Extended/Red/600

#920c00

Extended/Red/100

#ffc5be

Extended/Red/500

#b60f00

Extended/Red/050

#ffe9e5

#### <a id="_mp1hc6v8wudi"></a>Orange

__Token__

__Hex__

__Token__

__Hex__

Extended/Orange/900

#1e0d00

Extended/Orange/400

#b36526

Extended/Orange/800

#3c1b00

Extended/Orange/300

#c9824a

Extended/Orange/700

#5a2800

Extended/Orange/200

#dfa77a

Extended/Orange/600

#773805

Extended/Orange/100

#f4d3b8

Extended/Orange/500

#954c11

Extended/Orange/050

#fdebdb

#### <a id="_xv68cxtz2z30"></a>Yellow

__Token__

__Hex__

__Token__

__Hex__

Extended/Yellow/900

#201801

Extended/Yellow/400

#c09725

Extended/Yellow/800

#403001

Extended/Yellow/300

#e0b642

Extended/Yellow/700

#604803

Extended/Yellow/200

#f2cf74

Extended/Yellow/600

#806109

Extended/Yellow/100

#ffedb2

Extended/Yellow/500

#a07b13

Extended/Yellow/050

#fffad6

#### <a id="_n8bww9rkq9kv"></a>Green

__Token__

__Hex__

__Token__

__Hex__

Extended/Green/900

#081a13

Extended/Green/400

#509a74

Extended/Green/800

#103426

Extended/Green/300

#6eb38d

Extended/Green/700

#1a4d39

Extended/Green/200

#95ccaa

Extended/Green/600

#28674c

Extended/Green/100

#c6e6d0

Extended/Green/500

#39805f

Extended/Green/050

#e1f3e6

#### <a id="_vm176j9enb7b"></a>Dark Green

__Token__

__Hex__

__Token__

__Hex__

Extended/Dark Green/900

#0a1b18

Extended/Dark Green/400

#539f93

Extended/Dark Green/800

#153530

Extended/Dark Green/300

#6ebaad

Extended/Dark Green/700

#215048

Extended/Dark Green/200

#8fd4c9

Extended/Dark Green/600

#2e6a60

Extended/Dark Green/100

#b8efe6

Extended/Dark Green/500

#3e8579

Extended/Dark Green/050

#d5f9f3

#### <a id="_5py0j7biu15h"></a>Burgundy

__Token__

__Hex__

__Token__

__Hex__

Extended/Burgundy/900

#1b0d17

Extended/Burgundy/400

#a46191

Extended/Burgundy/800

#371a2f

Extended/Burgundy/300

#bf7cad

Extended/Burgundy/700

#522846

Extended/Burgundy/200

#db9eca

Extended/Burgundy/600

#6d385e

Extended/Burgundy/100

#f6c7e9

Extended/Burgundy/500

#894a77

Extended/Burgundy/050

#ffe0f6

### <a id="_60jvy761hvtm"></a>Semantic / Theme Tokens

⚠️ Note: Emphasis, Context, and Border tokens appear as #000000 / #ffffff in Figma — these are likely opacity-based or alias tokens. Actual values need verification from the ZDS token source.

#### <a id="_gobjak389jkn"></a>Light Theme

__Token__

__Hex__

__Notes__

Light Theme / Page Background

#f6f7f8

Cool Gray 050

Light Theme / Main Container

#ffffff

White

Light Theme / Link / Enabled

#0d4ac3

Extended Blue 500

Light Theme / Link / Hover

#0d4ac3

Extended Blue 500

Light Theme / Link / Pressed

#0d4ac3

Extended Blue 500

Light Theme / Link / Visited

#5435ab

Extended Purple 500

Light Theme / Link / Disabled

#5e8be5

Extended Blue 300

Light Theme / Info

#3269d4

Extended Blue 400

Light Theme / Ok / Success

#39805f

Extended Green 500

Light Theme / Warning

#e0b642

Extended Yellow 300

Light Theme / Error

#b60f00

Extended Red 500

#### <a id="_yl126zfwp55v"></a>Dark Theme

__Token__

__Hex__

__Notes__

Dark Theme / Page Background

#0b1116

Brand Navy 900

Dark Theme / Main Container

#16212b

Brand Navy 800

Dark Theme / Link / Enabled

#8fb2f6

Extended Blue 200

Dark Theme / Link / Hover

#8fb2f6

Extended Blue 200

Dark Theme / Link / Pressed

#8fb2f6

Extended Blue 200

Dark Theme / Link / Visited

#b69bfe

Extended Purple 200

Dark Theme / Ok / Success

#509a74

Extended Green 400

Dark Theme / Warning

#e0b642

Extended Yellow 300

Dark Theme / Error

#ff4635

Extended Red 300

## <a id="_egov2uuo0vm7"></a>3. Icons

### <a id="_4h5glxqsn52f"></a>Base Library — Material Design Icons

- __Source:__ Material Symbols (Outlined style, weight 400, optical size 20)
- __CDN import:__ https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined
- __Usage in mockups:__ Reference by icon name as a ligature, e.g. <span class="material-symbols-outlined">search</span>

### <a id="_n9ma5l65oooz"></a>Zuora Custom Icons

These are Zuora-specific icons that do not exist in Material Design. In mockups, use the closest Material equivalent and add a comment noting the intended Zuora icon.

#### <a id="_eroe2lga3daz"></a>action/

__Icon__

__Icon__

action/cancel_recurring

action/change_order

action/drag-corner

action/edit_label

action/exclude

action/export

action/import

action/import-export

action/late_fee

action/list_remove

action/ownership

action/pin_left

action/pin_right

action/process_payment

action/refund

action/workflow

action/write_off

#### <a id="_dw7868lbgvmn"></a>charts/

__Icon__

charts/stacked_chart

#### <a id="_m3dojns7w771"></a>file/

__Icon__

__Icon__

file/file-chart-outline

file/file-excel-outline

file/file_chart

file/file_code

file/file_pdf

file/file_table

file/tree_view

#### <a id="_37vvduz78irb"></a>misc/

__Icon__

__Icon__

misc/advanced_search

misc/asterisk

misc/balance

misc/currency_exchange

misc/database-off-outline

misc/database-outline

misc/download_template

misc/knowledgebase

misc/lightbulb

misc/organization

misc/system-warning

misc/tenant

#### <a id="_kvu0pg125khp"></a>navigation/

__Icon__

__Icon__

navigation/click

navigation/collapse

navigation/collapse_all

navigation/collapse_down

navigation/collapse_horiz

navigation/collapse_left

navigation/collapse_right

navigation/collapse_up

navigation/collapse_vert

navigation/expand

navigation/expand_all

navigation/expand_horiz

navigation/expand_vert

navigation/move

#### <a id="_viyq2iuy05yj"></a>payment/

__Icon__

__Icon__

payment/credit-card-check-outline

payment/credit-card-edit-outline

payment/credit-card-lock-outline

payment/credit-card-plus-outline

payment/credit-card-refresh-outline

payment/credit-card-remove-outline

payment/credit-card-sync-outline

#### <a id="_yesclq4rh9or"></a>products/

__Icon__

__Icon__

products/admin

products/analytics

products/billing

products/collect

products/customers

products/finance

products/home

products/insights

products/marketplace

products/payments

products/platform

products/products

products/reporting

products/revenue

products/zuora-core

#### <a id="_4cpuyxtv976a"></a>table/

__Icon__

__Icon__

table/column_group

table/insert_row

table/move_row_down

table/move_row_up

table/remove_row

table/row_group

#### <a id="_ojazkvgz3gfr"></a>other/

__Icon__

__Icon__

UIBuilder/not_config

userpilot/product_release

## <a id="_k4nmuc4jxhkf"></a>4. Layout & Spacing

Source: [occam.zuora.com/foundations-layout-and-spacing](https://occam.zuora.com/foundations-layout-and-spacing)

### <a id="_q4294nvkqvav"></a>Core Principles

- __Progressively Reveal Capabilities__ — Show only the most relevant information upfront; let users uncover details as needed.
- __Strive for Minimalism__ — Start with a clean, essential design. Resist unnecessary complexity while maintaining adaptability.

### <a id="_cfesiuh7uwqz"></a>Grid System

A structured grid ensures consistency and scalability across screens. Key properties: consistency across pages, modular flexibility, and balanced spacing for readability.

### <a id="_l2kul44v2m4e"></a>Spacing & Proximity

Spacing defines relationships between elements, reducing cognitive load. Includes padding, margins, and proximity to visually group related components.

- __Visual Grouping__ — Thoughtful spacing helps users naturally associate related actions, information, and components.
- __Containers & Components__ — Generous padding prevents overcrowding and highlights essential content.
- __Interactive Elements__ — Consistent spacing maintains clarity and prevents visual clutter.

### <a id="_s8ra3rmha9pn"></a>Layering & Elevation

Depth directs user focus, surfacing key actions at the right moments. Works in conjunction with the elevation system (see Section 5).

## <a id="_m6lqt6omiebz"></a>5. Elevation

Source: [occam.zuora.com/foundations-elevations](https://occam.zuora.com/foundations-elevations)

Elevations simulate depth by mimicking layered surfaces to express hierarchy. The Y-axis position increases by 2dp at each step.

__Elevation__

__Token__

__Usage__

-2dp

Recessed

Components that sit below the background, e.g. Preview (inset effect)

0dp

Base

Default background level; static elements remain flat

2dp

Raised

Containers like Card; subtle emphasis while maintaining balance

4dp

Elevated

Interactive elements requiring prominence: Drawers, Popovers, Modals, Toasts

__Best practices:__

- Stick to predefined elevation levels to maintain consistency
- Use -2dp for inset components that sit below the background
- Combine elevation with color, contrast, spacing, and typography to reinforce hierarchy

## <a id="_7iceg3foqutn"></a>6. Shapes & Styling

Source: [occam.zuora.com/foundations-shapes-and-styling](https://occam.zuora.com/foundations-shapes-and-styling)

### <a id="_l69fa7j4ddz2"></a>Border Radius

__Value__

__Usage__

4px

Default — buttons, inputs, cards, popovers, dialogs, modals

8px

Exception — Card Drawer only

9999px (pill)

Chips — fully rounded

### <a id="_6mhqpfa4axd"></a>Stroke & Borders

__State__

__Stroke__

__Usage__

Default

1px

Boundaries of most components; clean, consistent look

Focused

2px

Interactive elements: buttons, tabs, chips; enhances accessibility

Divider

1px

Visual separation between sections; non-overwhelming

### <a id="_v8feptis0we9"></a>Tooltips

Tooltips use pointer arrows to provide directional affordance.

## <a id="_2w3wgnosqjz0"></a>7. Motion

Source: [occam.zuora.com/foundations-motion](https://occam.zuora.com/foundations-motion)

Motion in Occam is purposeful, natural, and restrained — it guides attention and reinforces relationships without distraction.

### <a id="_4xb1ifaia842"></a>Motion Principles

- __Clarity__ — Motion communicates, not decorates. Subtle cues for hierarchy, relationships, and transitions.
- __Elegance__ — Transitions are smooth; microinteractions are lightweight and polished.
- __Adaptability__ — More pronounced when guiding focus; restrained when reinforcing stability.

### <a id="_88a8dl2q2n6d"></a>Standard Motion Patterns

__Pattern__

__Guideline__

Micro-interactions

Instant, lightweight feedback. Hover/press/focus states are quick and unobtrusive.

Transitions

Smooth, seamless movement between states. Fast and functional.

Expansion & Collapsing

Subtle easing on accordions, dropdowns, expandable sections. Reinforces cause and effect.

Feedback & Confirmation

Concise animations for success, error, loading. Never delays user progress.

### <a id="_ug5e6q1h9u0p"></a>Best Practices

- Every animation must serve a functional purpose — no purely decorative motion
- Apply uniform motion patterns for a cohesive, predictable experience
- Keep animations gentle and understated
- Optimize for performance — animations must not hinder responsiveness

### <a id="_tiulbc87bqwc"></a>Accessibility

- Respect OS-level reduced motion preferences (prefers-reduced-motion)
- No flashing or flickering (max 3 flashes/second per WCAG 2.3.1)
- Avoid extreme or disorienting movement (excessive zoom, parallax)
- Motion reinforces understanding; never replaces content as the primary conveyor of information

## <a id="_phfedr35z9lj"></a>8. Accessibility

Source: [occam.zuora.com/foundations-accessibility](https://occam.zuora.com/foundations-accessibility)

__Standard: WCAG 2.1 Level AA__

### <a id="_l2nalmhvegpa"></a>Principles (POUR)

- __Perceivable__ — Content presented in ways everyone can access
- __Operable__ — All interface elements are interactable
- __Understandable__ — Content and navigation are clear and predictable
- __Robust__ — Content works across different tools and technologies

### <a id="_nwqwwjkmc34b"></a>Key Requirements

__Visuals__

- Strong contrast for text and UI elements
- Color is never the sole way meaning is conveyed (always pair with text or icon)

__Keyboard & Navigation__

- All interactive elements are keyboard accessible
- Clear, visible focus indicators

__Inclusive Content__

- Alt text for meaningful images
- Logical heading structures for screen readers
- Captions for video, transcripts for audio

__Forms__

- Clear, persistent input labels (not just placeholders)
- Helpful error messages using both text and visual cues

## <a id="_29fyeidktc3u"></a>9. Components

Source: Figma file 03-Input · More component files to be added ⚠️ Components marked [needs updating] in Figma are not yet production-ready

### <a id="_j4pobi7kdf4p"></a>Input Components

#### <a id="_vr7z776zwzan"></a>Button / Standard Button

__Variants:__ Primary, Secondary, Tertiary, Text __Sizes:__ Medium, Small, X-Small __Icon positions:__ None, Start, End __States:__ Enabled, Hover, Focused/Selected, Pressed, Disabled __Color:__ Default, Danger __Theme:__ Light, Dark

#### <a id="_1v4a98fx3nk4"></a>Button Group

__Variants:__ Primary, Secondary, Tertiary, Text __Sizes:__ Medium, Small, X-Small __Orientation:__ Horizontal __Color:__ Default, Danger __Theme:__ Light, Dark

#### <a id="_gx5wgm4udsjr"></a>Icon Buttons

__Sizes:__ Medium, Small, X-Small __States:__ Enabled, Hover, Pressed, Focused/Selected, Disabled, Active __Theme:__ Light, Dark

Sub-component: Configure button (same states)

#### <a id="_nswfvb2av0ta"></a>Floating Action Button

__Type:__ Circular, Extended __Variants:__ Primary, Secondary, Tertiary __Sizes:__ Medium, Small, X-Small __States:__ Enabled, Hover, Pressed, Focused/Selected, Disabled __Theme:__ Light, Dark

#### <a id="_2xtj9zd4yycj"></a>Toggle Button

__Type:__ Icon, Text __Sizes:__ Medium, Small, X-Small __States:__ Default, Hover, Selected, Disabled __Has Divider:__ Yes, No __Has Left/Right Corners:__ Yes, No __Theme:__ Light, Dark

#### <a id="_s1754i32lr9t"></a>Text Field

__Types:__ Basic, Search, With Icon, Date Input, Multi-lines, Time Input, Number Field __Sizes:__ Medium, Small __States:__ Normal, Hover, Completed, Activated, Inputting, Read Only, Disabled, Error, Error Activated __Optional:__ Label, Helper Text

Sub-component: Input/Label — states: Default, Error, Activated · Theme: Light, Dark

#### <a id="_28lkisyzvgdx"></a>Autocomplete / Single Select

__Sizes:__ Medium, Small __States:__ Normal, Hover, Activated, Inputting, Ready Only, Disabled, Error, Error Activated, Selection, Hover Selection __Has Label:__ True, False

#### <a id="_ph1q3eygl611"></a>Autocomplete / Multiselect

__Sizes:__ Medium, Small __States:__ Normal, Hover, Selected, Hover Selected, Hover Selected and Inputting, Hover Selected and Inputting Done, Hover Cancel Selection, Selected and disabled, Error, Activated, Inputting, Disabled, Read Only, Selected and show all items, Error Inputting __Has Label:__ True, False

#### <a id="_p5wj0r127u7k"></a>Select / Single Select

__Sizes:__ Medium, Small __States:__ Normal, Hover, Activated, Ready Only, Disabled, Error, Error Activated, Selected, Hover Selected __Has Label:__ True, False

#### <a id="_g5gzr791i91c"></a>Select / Multiple Select

__Sizes:__ Medium, Small __States:__ Normal, Hover, Hover Cancel Selection, Error, Activated, Disabled, Read Only, Selected and show all items, Selection, Hover Selection, Selection and disabled __Selection display:__ Chip, Comma __Has Label:__ True, False

#### <a id="_3svwpa4ipnfu"></a>Checkbox

__Sizes:__ Medium, Small, X-Small __States:__ Enable, Hover, Pressed, Focused, Disabled __Selected:__ True, False __Indeterminate:__ True, False __Label:__ True, False __Theme:__ Light, Dark

#### <a id="_a73orjgmsxyq"></a>Radio

__Sizes:__ Medium, Small, X-Small __States:__ Enabled, Hover, Disabled, Pressed, Focused __Checked:__ True, False __Label:__ True, False __Theme:__ Light, Dark

#### <a id="_oemmsasbdao4"></a>Switch

__Sizes:__ Medium, Small __States:__ Enable, Hover, Disable, Pressed, Focused __Checked:__ True, False __Label position:__ N/A, Start, End __Required:__ Yes, No __Error:__ True, False __Theme:__ Light, Dark

#### <a id="_8uu7pao6uvcy"></a>Color Picker

__States:__ Default, Hover, Open, Custom Color __Has Tint:__ Boolean

#### <a id="_6aqeo4z3or8g"></a>List / List

__Type:__ Default

#### <a id="_r6apvuuv8czm"></a>List / ListItem

__Types:__ List Item, Divider, Search, Group name __Variants:__ Default, Tree Level 1, Tree Level 2, Tree Level 3 __States:__ Default, Hover, Selected, Disabled, Hover Selected, Pressed __Has Checkbox:__ True, False __Optional:__ Secondary text, Leading Icon, Icon Button, Chevron, Switch, Chip

#### <a id="_duam9n24b469"></a>List / Search

__States:__ Default, Hover, Activated, Inputing, Completed, Completed Hover, Disabled

🔧 Additional component files (navigation, data display, feedback, layout, etc.) to be added

### <a id="_54l8gempoq72"></a>AI Components

Source: Figma file OCCAM-AI-Components Components marked 🚧 are WIP and not yet production-ready

#### <a id="_kmot5qbdqtnf"></a>AI Alert

__Types:__ One Line, Multiple Lines __Optional:__ Close Button, Action button __Note:__ Informational alert pattern styled for AI context

#### <a id="_61srevpkiod9"></a>AI Button

__Types:__ Primary, Secondary, Text Button __Sizes:__ Medium, Small, X-Small __States:__ Enabled, Hover, Focused/Selected, Pressed, Disabled __Background:__ Light, Dark __AI Icon:__ True, False (icon can be hidden, most common on Text Button type)

#### <a id="_4u5kgzqhwpgs"></a>AI Card

__States:__ Default, Hover, Thinking, Focused/Selected __Optional:__ Card Header, Footer __Note:__ Includes a "Thinking" state for loading/processing AI responses

Sub-component: AI Card Title — with optional Actions and Description

#### <a id="_p3hxrornr97u"></a>AI Chip

__Types:__ Default, Outlined __States:__ Enabled, Hover, Focused/Selected __Mode:__ Light, Dark __Clickable:__ True, False __Deletable:__ True, False __Optional:__ Trailing Icon

#### <a id="_ytyoqmk5g6ko"></a>AI Icon Button

__Sizes:__ Medium, Small, X-Small __States:__ Enabled, Hover, Focused/Selected, Pressed, Disabled __Background:__ Light, Dark __Outline:__ True, False __Color:__ Gradient, Grey

#### <a id="_3x5cmwfoz2t9"></a>Suggested Action Button (AI Suggested Actions)

__States:__ Default, Hover, Pressed, Focused, Disabled __Note:__ Spark icon can appear standalone; title is optional. Purpose-built for surfacing AI-recommended actions inline.

#### <a id="_f5semqiud4i0"></a>🚧 AI Input *(WIP)*

Input field for AI chat/prompt entry — not yet production-ready

#### <a id="_8xffqkohnqls"></a>🚧 AI Chat Button *(WIP)*

Chat trigger button — not yet production-ready

### <a id="_4tnac3fneezc"></a>Foundation Components

Source: Figma file 01-Foundation Pages marked [needs updating] are not production-ready: Grid, Logo, Progress Bar, Spacing, Tools Header, Global Navigation (old)

#### <a id="_3r7ow67fg816"></a>UI Shell (Zuora UI Shell)

The top-level application wrapper. Sets the global theme and canvas size — cascades to all nested components.

__Themes:__ Cosmos, Horizon, Nebula __Sizes:__ 1280px, 1440px, 1600px __Focus Mode:__ True, False __Optional:__ Footer

__Theme__

__Character__

Cosmos

Dark navy — Zuora's primary enterprise shell

Horizon

Mid-tone — transitional/secondary surfaces

Nebula

Light — clean, minimal product surfaces

#### <a id="_hhfc5ytz65f3"></a>Page Header

The persistent header at the top of every page. Adapts to view type, form context, and wizard flows.

__Page Header Types:__ View, Form, Form Pinned __Themes:__ Nebula, Horizon, Cosmos, No background

__Optional slots:__ Overline, Status chips (1 or 2), Supporting info, Pinnable

__Actions — View Pages__ (Type: Default, AI Summarize, Object View)

__Slot__

__Notes__

Primary button

Boolean

Secondary button 1 & 2

Boolean

More actions button

Boolean

AI Summarize button

Boolean

Configure button

Boolean

Description

Boolean

History

Boolean

Hierarchy

Boolean — Object View specific

__Actions — Form Pages__ (Type: Create, Edit, Wizard, Save Draft)

Same slots as View Pages, plus:

__Slot__

__Notes__

Is Wizard

Boolean

Step

First, PreviousNext, Last, N/A

### <a id="_7pu2kby2vyav"></a>Navigation Components

Source: Figma file 02-Navigation Pages marked [needs updating]: Pagination, Footer

#### <a id="_yf8z8tqztrir"></a>Global Navigation

The primary navigation shell. Contains primary nav, secondary nav, search modal, and theme background.

__Theme:__ Cosmos, Horizon, Nebula __Page Type:__ Homepage, Other Pages, All Pages __Primary Nav:__ Active, Focus Mode (Ghost) __Secondary Nav (app context):__ Command Center, Billing, Revenue, Zephr, Quoting, Collections, App Settings, Closed / Focus Mode

Sub-components:

- Global Nav - Secondary Nav — Theme · Page Type · View (Admin / Persona) · App
- Global Nav - Search Modal — Theme only
- Theme Background — Theme · Page Type

#### <a id="_shkc4elv875u"></a>Breadcrumb

__Levels:__ 1–6 __Optional:__ Tour Indicator

Sub-component: .breadcrumbItem

- __Variant:__ Default, Current Location
- __State:__ Default, Hover

#### <a id="_zbs45y4i9org"></a>Link

__Variant:__ Always Underlined, No Underline, External, Dotted __State:__ Default, Hover, Pressed, Disabled, Focused __Theme:__ Light, Dark

#### <a id="_w9xm8g967bh8"></a>Tabs

__Type:__ Parent, Child __Orientation:__ Horizontal, Vertical __State:__ Default, Selected, Focus, Selected Focus __Theme:__ Light, Dark __Optional:__ Leading Icon

#### <a id="_f17yyududh0i"></a>Stepper

__Type:__ Horizontal, Vertical, Condensed __Label Alignment:__ Left, Center __Description:__ True, False __Theme:__ Light, Dark

Sub-components:

- Stepper/Step — Type (Active, Inactive, Done, Error + Condensed Dark variants) · Label Alignment · Theme · Optional Description
- Stepper/Element — Type (Default, Active, Done, Error) · Theme
- Stepper/Line — Theme

### <a id="_tva1a6t2bulc"></a>Utility Components

Source: Figma file 06-Utilities Pages marked [needs updating]: Divider, Scrollbar Color Spot page is internal/WIP — not production

#### <a id="_y6qkqn90cyih"></a>Glass Effect

__Theme:__ Light, Dark __State:__ Default/Hover, Focused/Selected __Elevated:__ True, False

A frosted-glass surface treatment — used for overlaying content with depth. Combine with elevation system.

### <a id="_zi7kjjkfcem0"></a>Feedback Components

Source: Figma file 05-Feedback

#### <a id="_sngjyjt3s2j2"></a>Alert

__Status:__ Info, Success, Warning, Error __Multi-line:__ True, False __Optional:__ Status Icon, Close Icon, Action button, Title

#### <a id="_ehd3o79do50b"></a>Dialog

__Status:__ Information, Success, Warning, Error __Size:__ Small __Status Icon:__ True, False __Optional:__ Ignore Button

#### <a id="_abihudfoahey"></a>Progress

__Type:__ Circular, Linear __Sizes:__ Extra Small, Small, Medium, Large, N/A __Label:__ True, False __Theme:__ Light, Dark

#### <a id="_fqrye3yn4iun"></a>Skeleton

__Animation:__ Start, End

Used as a loading placeholder — animated shimmer indicating content is loading

#### <a id="_l1hxmyiz3pvf"></a>Snackbar

__Type:__ Info, Success, Warning, Error __Multi-line:__ True, False __Optional:__ Status Icon, Actions, Close Icon

Note: Close Button and Text Button are always True when shown — not togglable off individually

#### <a id="_ptaz57x6jmrr"></a>Tooltip

__Position:__ Top, Bottom, Left, Right __Pointer Position:__ Start, Center, End __Theme:__ Light, Dark

### <a id="_dq0b58bf5ktn"></a>Data Display Components

Source: Figma file 04-Data-Display Pages marked [needs updating]: Code Preview, Empty State, Meter, TreeView, Timeline

#### <a id="_o8e07xu40o15"></a>Accordion

__Type:__ Group, Standalone __Position:__ First, Middle, Last, N/A (for standalone) __Expanded:__ True, False __Disabled:__ True, False

Sub-component: .Accordion Header

- __Type:__ Collapsed, Expanded
- __State:__ Default, Disabled
- __Optional:__ Description, Secondary Button, Tertiary Button

#### <a id="_uz3watpeexi1"></a>Avatar

__Variant:__ Circular __Size:__ Large __Content:__ Icon __Theme:__ Light, Teal __Color/Theme:__ Black

Note: Supports image, initials, and icon content types

#### <a id="_tyzuk2hv7ci"></a>Badge

__Type:__ Standard, Dot __Color:__ Info, Negative __Background:__ Light, Dark

#### <a id="_sbhcn56qgawe"></a>Card

Card uses composition — no standalone variant set. Structure is defined by sub-components.

Sub-component: .Card Title

- __Type:__ Default, Overline title
- __Optional:__ Description, Action Button

#### <a id="_att4okmvuyf4"></a>Chip

__Style:__ Outline, Filled · __Variant:__ Filled, Outlined __Types:__ Normal, Default, Custom-Right Icon, Clickable, Deletable __Context / Color:__ Default, Negative, Positive, Success, Indeterminate, Warning, Info __Size:__ Medium, Small __Usage:__ Normal, Primary __State:__ Enabled, Default __Theme / Background:__ Light, Dark

Special variant: Environment Chips — Type: Production (and others)

#### <a id="_wumsy3oupm2f"></a>Data Grid

Occam's primary table component — complex, highly composable.

__Column features:__ Sorting, filtering, grouping, resizing, pinning __Row features:__ Selection (single/multi), inline editing, row actions __Bulk actions type:__ Text buttons, Icon buttons __Status chips in cells:__ Default, Negative, Success colors

Data Grid is the most complex component in the library. When mocking, clarify: column count, row density, which toolbar actions are needed, and whether bulk selection is required.

#### <a id="_pmkr3js3jbil"></a>Drawer

__Type:__ Single Page, Multi Page __Optional:__ Footer, Subtitle, Close Icon, Multi-page router

border-radius: 8px — the only component that deviates from the 4px default

#### <a id="_vwflrbdsuu"></a>Grouped List — Sortable

__State:__ Default, Hover, Proximity Hover, Selected/Focused __Theme:__ Light, Dark __Optional:__ Chip, Action Buttons

#### <a id="_j5q1lr5isoqz"></a>Grouped List — Multi-Card

__State:__ Default, Proximity Hover, Hover, Open __Theme:__ Light, Dark __Optional:__ Chip

#### <a id="_lkhmvt9dwxzu"></a>Modal

__Type:__ Default

Modal uses composition — content is slotted in. Structure follows Dialog pattern for confirmation flows.

#### <a id="_vvmaiio6z2q4"></a>Popover

__Type:__ Default, Error Popover, With Buttons __Theme:__ Light, Dark __Optional:__ Link, Title

#### <a id="_yivjmugoe1pe"></a>Preview Panel

Side panel for contextual detail views. Uses Chip and Dropdown Icon sub-components. Theme: Light.

#### <a id="_8bm09exc39a7"></a>Widget

__Widget Icon Types:__ Quick Link, Business Process, Report, Default, App

__Named icons:__ Order Entry, Quick Link, Report, Batch Price Update, Auto Suspend/Resume, Cancel Subscription, Revenue, Approve Journals & RCs, Import Revenue Events, Release Holds, Create Journal Entries, Review Revenue Contract, Run Report

### <a id="_ihw2sqoqwx2a"></a>Data Visualization Components

Source: Figma file 08-Data-Visualization Rendering library: __Highcharts__ ([highcharts.com/demo](https://www.highcharts.com/demo)) All charts support Light and Dark themes

#### <a id="_974y9n393nx9"></a>Data Viz Color Palette

Occam uses a specific ordered sequence for chart series colors. Apply in order — do not skip or reorder.

__Light Theme — Series Order__

__#__

__Name__

__Hex__

01

Teal 500

#009684

02

Blue 500

#0d4ac3

03

Navy 600

#33495c

04

Orange 300

#c9824a

05

Dark Red 600

#68003b

06

Purple 400

#6f4dcd

07

Green 700

#1a4d39

08

Dark Red 300

#b43e81

09

Green 400

#509a74

10

Midnight 600

#49416f

11

Red 500

#b60f00

12

Purple 600

#3f2489

13

Burgundy 500

#894a77

14

Yellow 500

#a07b13

15

Navy 400

#5f7b91

__Dark Theme equivalents__ use lighter palette steps (e.g. Teal 300 #00d2b9, Blue 300 #5e8be5, Purple 200 #b69bfe, etc.)

__Group color sets__ (for categorical grouping): 1, 2, 3, 4 group palettes defined in Figma.

#### <a id="_9hhr0djbq0c4"></a>Chart Elements (Sub-components)

Shared building blocks used across all chart types.

__Element__

__Key Variants__

Chart Grid

Horizontal/Vertical lines, Y values, Second Y axis, Y/X axis titles, Description — all boolean

Chart Tooltip

Style: Top, Text Only, Text+Number Right, Number Only · Header: True/False

Chart Legend

Type: Category, Line, Line with points, Dash line · Counter · State: Default/Disabled

Chart Dot

Shape: Circle, Outlined · State: Default/Hover · Color: Teal, Burgundy, Blue, Green, Red, Yellow, Purple, Orange, Navy, Dark red

Chart Hover Line

Dash Line: True/False

Chart Label

Style: 1/2/3 Lines · Size: Small/Medium/Large · Percentage Change Indicator

Chart Percentage Change Indicator

Type: Positive, Negative

Chart Forecast Label

Theme only

X axis values

Types: Time Interval · Number of Labels: 6/8/12/15/30

.Chart Horizontal Line

Type: Horizontal Line, Line + Left and Right values, Line + Center value

.Chart Vertical Line

Type: Vertical Line, Line + Center value, Line + left/right value

#### <a id="_7nu6aqwlj0zg"></a>Line Chart

__Lines count:__ 1, 2, 4, 6 __Smooth line:__ True, False __Trend line:__ True, False __Forecast:__ True, False __Theme:__ Light, Dark

#### <a id="_5vhvykci0fsh"></a>Area Chart

__Type:__ Basic, Stacked Area, Stepped Area, Stream Area, Area Range __Gradient:__ True, False __Smooth line:__ True, False __Overlapping:__ True, False __Trend line:__ True, False __Forecast:__ True, False __Theme:__ Light, Dark

#### <a id="_5yta9g3dm4y"></a>Donut & Semi-Donut Charts

__Donut Chart__

- __Thickness:__ 50%, 65%, 75%, 90%
- __State:__ Default, Hover
- __Data parts:__ 1 Part, 6 Parts, No Data
- __Label:__ True, False
- __Theme:__ Light, Dark

__Semi-Donut Chart__

- Same props as Donut Chart

__Donut Chart — Small__

- __Edge case:__ No data, Low value
- __Skeleton:__ True, False
- __Theme:__ Light, Dark

__Semi-Donut Chart — Small__

- __Data Parts:__ 1 Part, 4 Parts, No data
- __Theme:__ Light, Dark

__Progress Ring Chart__

- __Percentage:__ 0, 25, 50, 75
- __Theme:__ Light, Dark

#### <a id="_ujx860tyiusm"></a>Bar Chart (Vertical)

__Bar Chart__

- __Group bars:__ True, False
- __Time interval:__ 6, 8, 10, 12, 15, 30
- __Trend line:__ True, False
- __Negative:__ True, False
- __Theme:__ Light, Dark

__Stacked Bar Chart__

- __Type:__ Wide, Thin
- __Time interval:__ 6, 8, 10, 12, 15, 30
- __Trend line:__ True, False
- __Theme:__ Light, Dark

#### <a id="_60b3z4vcu18n"></a>Horizontal Bar Chart

__Layouts:__ Inline, Vertical, Bi-direction __Grouped Bars:__ True, False __100% in total:__ True, False __State:__ Default, Hover __Theme:__ Light, Dark

Sub-types: Standard, With Value, Grouped, Stacked, Bi-directional — each with their own layout/value/percentage toggles

## <a id="_iznxzmbpslb8"></a>10. Usage Guidelines (Content Strategy)

*To be added — see *[*occam.zuora.com/foundations-content-strategy*](https://occam.zuora.com/foundations-content-strategy)

*This file is generated from Figma source files (via MCP) and the Occam website. Re-extract when tokens are updated.* *Source: occam.zuora.com · Last updated May 2026*


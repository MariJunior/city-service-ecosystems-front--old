---
inject: true
append: true
skip_if: <%= name %>
to: src/<%= typePath %>/index.ts
---
export * from './<%= name %>';

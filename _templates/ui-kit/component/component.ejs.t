---
to: src/<%= fullPath %>/<%= name %>.tsx
---
<% const compName = h.inflection.undasherize(name) -%>
<% const props = `${compName}Props` -%>
import styled from '@emotion/styled';

export interface <%= props %> {}

export function <%= compName %>({}: <%= props %>) {
  return <Wrapper>edit me: at src/<%= fullPath %>/<%= name %>.tsx</Wrapper>;
}

const Wrapper = styled.div``;

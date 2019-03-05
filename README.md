# jest-combinator (WIP)

## Idea

Syntax:
```javascript
import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { variants } from "jest-combinator";
import { Fieldset } from "../Fieldset";

describe("<Fieldset />", () => {
    it("Fieldset renders correctly", () => {
        const tree = renderer
            .create(
                <Fieldset flag={variants(true, false)} value={variants(undefined, "value")} />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
```

will generate snapshots for all combinations of props:
```javascript
<Fieldset flag={true} value={undefined} />,
<Fieldset flag={false} value={undefined} />,
<Fieldset flag={true} value={"value"} />,
<Fieldset flag={false} value={"value"} />
```

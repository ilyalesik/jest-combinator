import React from "react";
import renderer from 'react-test-renderer'
import "../src/index"

describe("serializer", () => {
    it("simple", () => {
        const component = (
            <div>component</div>
        );

        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

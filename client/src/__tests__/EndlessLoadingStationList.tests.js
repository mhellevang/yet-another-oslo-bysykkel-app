import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import EndlessLoadingStationList from "../compnents/station/EndlessLoadingStationList";
import {createTestStationList} from "../testUtils";


describe('EndlessLoadingStationList', () => {
    it('Shall display all stations', () => {
        render(
            <EndlessLoadingStationList
                stations={createTestStationList(3)}
            />
        );

        expect(screen.getByText("Bysykkelstasjon 1")).toBeInTheDocument();
        expect(screen.getByText("Bysykkelstasjon 2")).toBeInTheDocument();
        expect(screen.getByText("Bysykkelstasjon 3")).toBeInTheDocument();

    });

    it('Shall have pagination with a default page size of 25', async () => {

        let bigStationList = createTestStationList(100)

        render(
            <EndlessLoadingStationList
                stations={bigStationList}
            />
        );

        const items = await screen.findAllByTestId("station");
        expect(items).toHaveLength(25);
    });

});
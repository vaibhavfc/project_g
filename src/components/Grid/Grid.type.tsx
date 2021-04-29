import { Ref } from 'react';
import { GridProps as MuiGrid, GridClassKey, GridContentAlignment, GridDirection, GridItemsAlignment, GridJustification, GridSize, GridSpacing, GridTypeMap, GridWrap } from '@material-ui/core/Grid';

export interface GridStylingProps extends Partial<Record<GridClassKey, string>> {

}




export interface GridProps extends MuiGrid {
    innerRef: Ref<HTMLDivElement>,
    px?: GridSize,
    py?: GridSize,
    pt?: GridSize,
    pr?: GridSize,
    pb?: GridSize,
    pl?: GridSize,
    mx?: GridSize,
    my?: GridSize,
    mt?: GridSize,
    mr?: GridSize,
    mb?: GridSize,
    ml?: GridSize,
}


import * as types from "../actions"

export const openDrawer = ()  =>({
   type : types.OPEN_NAVIGATION_DRAWER
})

export const closeDrawer = ()  =>({
    type : types.CLOSE_NAVIGATION_DRAWER
})
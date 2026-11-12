// @ts-ignore -- allow this spec to type-check when Playwright declarations are unavailable.
async function getExmaple(){
    return "abc";
}


// @ts-ignore -- allow this spec to type-check when Playwright declarations are unavailable.
import { test} from '@playwright/test';
test('user say hello', async ({ page }: { page: any })=>{
            let t=  await page.goto("");
            let c = await getExmaple();
});
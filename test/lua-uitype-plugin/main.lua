-------Add custom menu-------

local toolMenu = App.menu:GetSubMenu("tool");
toolMenu:AddItem("导出uitype", "lua-uitype-plugin", function(menuItem)
    local exePath = App.project.basePath .. "\\plugins\\lua-uitype-plugin\\一键导出dts.bat"
    CS.FairyEditor.ProcessUtil.Start(exePath, nil, nil, false)
    fprint('导出dts');
end)

-------do cleanup here-------
function onDestroy()
    toolMenu:RemoveItem("lua-uitype-plugin")
end
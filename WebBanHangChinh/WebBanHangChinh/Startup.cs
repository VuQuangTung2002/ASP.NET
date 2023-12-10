using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebBanHangChinh.Startup))]
namespace WebBanHangChinh
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Multiselectdropdwninangualrjsapp.Startup))]
namespace Multiselectdropdwninangualrjsapp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

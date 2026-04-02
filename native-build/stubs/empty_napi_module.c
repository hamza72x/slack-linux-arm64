#include <stddef.h>

// Minimal N-API types needed
typedef struct napi_env__ *napi_env;
typedef struct napi_value__ *napi_value;

typedef napi_value (*napi_addon_register_func)(napi_env env, napi_value exports);

// Just return exports unchanged - empty module
napi_value napi_register_module_v1(napi_env env, napi_value exports) {
    return exports;
}

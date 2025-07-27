
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/addEmployee/addEmployee.mjs
var addEmployee_default = (request, context) => {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get("name") || "World";
    return new Response(`Hello ${subject}`);
  } catch (error) {
    return new Response(error.toString(), {
      status: 500
    });
  }
};
export {
  addEmployee_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvYWRkRW1wbG95ZWUvYWRkRW1wbG95ZWUubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBEb2NzIG9uIHJlcXVlc3QgYW5kIGNvbnRleHQgaHR0cHM6Ly9kb2NzLm5ldGxpZnkuY29tL2Z1bmN0aW9ucy9idWlsZC8jY29kZS15b3VyLWZ1bmN0aW9uLTJcbmV4cG9ydCBkZWZhdWx0IChyZXF1ZXN0LCBjb250ZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcbiAgICBjb25zdCBzdWJqZWN0ID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ25hbWUnKSB8fCAnV29ybGQnXG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGBIZWxsbyAke3N1YmplY3R9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGVycm9yLnRvU3RyaW5nKCksIHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgIH0pXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFDQSxJQUFPLHNCQUFRLENBQUMsU0FBUyxZQUFZO0FBQ25DLE1BQUk7QUFDRixVQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVEsR0FBRztBQUMvQixVQUFNLFVBQVUsSUFBSSxhQUFhLElBQUksTUFBTSxLQUFLO0FBRWhELFdBQU8sSUFBSSxTQUFTLFNBQVMsT0FBTyxFQUFFO0FBQUEsRUFDeEMsU0FBUyxPQUFPO0FBQ2QsV0FBTyxJQUFJLFNBQVMsTUFBTSxTQUFTLEdBQUc7QUFBQSxNQUNwQyxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=

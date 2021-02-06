<template>
  <div>
    <nav class="bg-blue-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex">
              <i
                class="fas fa-clipboard-list fa-2x object-center text-green-500"
              ></i>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  href="/messages"
                  class="text-gray-600 hover:bg-yellow-200 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >Your Messages</a
                >

                <a
                  href="/add"
                  class="text-gray-600 hover:bg-yellow-200 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >Add Message</a
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button class="p-1 rounded-full">
                <div class="ml-3">
                  <i class="fas fa-user-astronaut fa-2x text-green-500"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-800">
          Messages List
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div
            class="border-4 border-dashed border-gray-200 rounded-lg h-96"
          ></div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>
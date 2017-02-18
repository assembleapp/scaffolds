require "json"

class Assemble
  def self.current_run
    Run.new(
      ENV.fetch("ASSEMBLE_BLOCK_NAME"),
      ENV.fetch("ASSEMBLE_DIR", "/.assemble")
    )
  end

  class Run < Struct.new(:block_name, :assemble_dir)
    def input
      JSON.parse(File.read(File.join(assemble_dir, "input.json")))
    end

    def output(data)
      File.write(File.join(assemble_dir, "output.json"), data.to_json)
    end
  end
end
